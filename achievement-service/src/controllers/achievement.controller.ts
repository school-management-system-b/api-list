import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import { createAchievementSchema } from '../validators/achievement.validator';

export const getAchievements = async (req: Request, res: Response) => {
  const offset = parseInt(req.headers['x-paging-offset'] as string) || 0;
  const limit = parseInt(req.headers['x-paging-limit'] as string) || 25;
  const search = req.headers['x-paging-search'] as string;
  const studentId = req.query.studentId as string;
  const status = req.query.status as any;

  const user = (req as any).user;
  const userRole = user?.roles?.[0];

  const where: any = {
    deletedAt: null,
    ...(studentId && { studentId }),
    ...(status && { status }),
    ...(search && {
      OR: [
        { studentName: { contains: search, mode: 'insensitive' as any } },
        { title: { contains: search, mode: 'insensitive' as any } },
      ],
    }),
  };

  // RBAC Data Filtering
  if (userRole === 'WALIKELAS') {
    const studentServiceUrl = process.env.STUDENT_SERVICE_URL || 'http://localhost:3003';
    const headers = { 'x-internal-secret': process.env.INTERNAL_SECRET };
    try {
      const classRes = await axios.get(`${studentServiceUrl}/api/v1/internal/classes/by-wali/${user.id}`, { headers });
      if (classRes.data.data) {
        where.studentClass = classRes.data.data.name;
      } else {
        where.id = 'none';
      }
    } catch (e) {
      where.id = 'none';
    }
  } else if (userRole === 'ORANGTUA') {
    const studentServiceUrl = process.env.STUDENT_SERVICE_URL || 'http://localhost:3003';
    const headers = { 'x-internal-secret': process.env.INTERNAL_SECRET };
    try {
      const studentsRes = await axios.get(`${studentServiceUrl}/api/v1/internal/students/by-parent/${user.id}`, { headers });
      const studentIds = studentsRes.data.data.map((s: any) => s.id);
      where.studentId = { in: studentIds };
    } catch (e) {
      where.id = 'none';
    }
  } else if (userRole === 'SISWA') {
    where.studentId = user.id;
  }

  const [items, total] = await Promise.all([
    prisma.achievement.findMany({
      where,
      skip: offset,
      take: limit,
      orderBy: { achievementDate: 'desc' },
    }),
    prisma.achievement.count({ where }),
  ]);

  return sendResponse(res, 200, true, 'Achievements retrieved', {
    items,
    pagination: {
      offset,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};

import axios from 'axios';

export const createAchievement = async (req: Request, res: Response) => {
  const { error, value } = createAchievementSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  try {
    const studentServiceUrl = process.env.STUDENT_SERVICE_URL || 'http://localhost:3003';
    const categoryServiceUrl = process.env.CATEGORY_SERVICE_URL || 'http://localhost:3006';
    const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
    const headers = { 'x-internal-secret': internalSecret };

    // Fetch real data from other services
    const [studentRes, categoryRes] = await Promise.all([
      axios.get(`${studentServiceUrl}/api/v1/internal/students/${value.studentId}`, { headers }),
      axios.get(`${categoryServiceUrl}/api/v1/internal/categories/${value.categoryId}`, { headers })
    ]);

    const student = studentRes.data.data;
    const category = categoryRes.data.data;

    // Logic calculation placeholder
    const basePoints = category.basePoints || 50;
    const points = basePoints; // Should use PointsCalculationService depending on level/rank

    const userRole = (req as any).user?.roles?.[0] || 'GURUMAPEL';
    let initialStatus: 'PENDING' | 'APPROVED_WALI' = 'PENDING';
    
    if (['SUPERADMIN', 'ADMIN', 'BK', 'WALIKELAS'].includes(userRole)) {
      initialStatus = 'APPROVED_WALI';
    }

    const achievement = await prisma.achievement.create({
      data: {
        ...value,
        status: initialStatus,
        studentName: student.name,
        studentNisn: student.nisn,
        studentClass: student.className,
        categoryName: category.name,
        categoryCode: category.code,
        categoryType: category.achievementType || 'OTHER',
        basePoints,
        points,
        reportedBy: (req as any).user?.id || 'SYSTEM',
        reportedByName: (req as any).user?.name || 'System User',
        reporterRole: userRole,
        createdBy: (req as any).user?.id || 'SYSTEM',
        ...(initialStatus === 'APPROVED_WALI' && {
          approvedAt: new Date(),
          approvedBy: (req as any).user?.id || 'SYSTEM',
          approvedByName: (req as any).user?.name || 'System User',
        })
      },
    });

    await prisma.achievementApprovalHistory.create({
      data: {
        achievementId: achievement.id,
        action: initialStatus === 'APPROVED_WALI' ? 'APPROVE_WALI' : 'SUBMIT',
        fromStatus: 'PENDING',
        toStatus: initialStatus,
        approverUserId: (req as any).user?.id || 'SYSTEM',
        approverName: (req as any).user?.name || 'System User',
        approverRole: userRole,
        notes: initialStatus === 'APPROVED_WALI' ? 'Auto-approved by reporter role' : 'Achievement recorded and submitted for approval',
      },
    });

    return sendResponse(res, 201, true, 'Achievement created successfully', achievement);
  } catch (err: any) {
    console.error('Error in createAchievement:', err.message);
    return sendError(res, 500, 'Failed to record achievement due to internal service error');
  }
};

export const getAchievementById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await prisma.achievement.findUnique({
    where: { id },
    include: {
      approvalHistory: {
        orderBy: { actionDate: 'asc' },
      },
    },
  });

  if (!item) return sendError(res, 404, 'Achievement not found');

  return sendResponse(res, 200, true, 'Achievement detail retrieved', item);
};

export const updateAchievement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await prisma.achievement.findUnique({ where: { id } });
  if (!item) return sendError(res, 404, 'Achievement not found');
  if (item.status !== 'PENDING')
    return sendError(res, 400, 'Cannot update achievement that is already processed');

  const updated = await prisma.achievement.update({
    where: { id },
    data: {
      ...req.body,
      updatedBy: (req as any).user?.id || 'SYSTEM',
    },
  });

  return sendResponse(res, 200, true, 'Achievement updated', updated);
};

export const deleteAchievement = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.achievement.update({
    where: { id },
    data: {
      deletedAt: new Date(),
      isActive: false,
      updatedBy: (req as any).user?.id || 'SYSTEM',
    },
  });

  return sendResponse(res, 200, true, 'Achievement deleted successfully');
};
export const getTopReporters = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 5;

  const reporters = await prisma.achievement.groupBy({
    by: ['reportedBy', 'reportedByName', 'reporterRole'],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: 'desc',
      },
    },
    take: limit,
    where: { deletedAt: null },
  });

  return sendResponse(res, 200, true, 'Top achievement reporters retrieved', reporters.map(r => ({
    userId: r.reportedBy,
    name: r.reportedByName,
    role: r.reporterRole,
    count: r._count.id
  })));
};
