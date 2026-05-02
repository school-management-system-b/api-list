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

  const where = {
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

    const achievement = await prisma.achievement.create({
      data: {
        ...value,
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
        reporterRole: (req as any).user?.roles?.[0] || 'GURUMAPEL',
        createdBy: (req as any).user?.id || 'SYSTEM',
      },
    });

    await prisma.achievementApprovalHistory.create({
      data: {
        achievementId: achievement.id,
        action: 'SUBMIT',
        fromStatus: 'PENDING',
        toStatus: 'PENDING',
        approverUserId: (req as any).user?.id || 'SYSTEM',
        approverName: (req as any).user?.name || 'System User',
        approverRole: (req as any).user?.roles?.[0] || 'GURUMAPEL',
        notes: 'Achievement recorded and submitted for approval',
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
