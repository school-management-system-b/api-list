import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import { approveSchema, rejectSchema } from '../validators/achievement.validator';

import axios from 'axios';

export const approveAchievement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = approveSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const achievement = await prisma.achievement.findUnique({ where: { id } });
  if (!achievement) return sendError(res, 404, 'Achievement not found');
  if (achievement.status !== 'PENDING')
    return sendError(res, 400, 'Achievement is already processed');

  const updated = await prisma.achievement.update({
    where: { id },
    data: {
      status: 'APPROVED',
      approvedAt: new Date(),
      approvedBy: (req as any).user.id,
      approvedByName: (req as any).user.name,
      bkNotes: value.notes,
      isPublished: value.isPublished,
      isFeatured: value.isFeatured,
      featuredUntil: value.featuredUntil,
    },
  });

  await prisma.achievementApprovalHistory.create({
    data: {
      achievementId: id,
      action: 'APPROVE',
      fromStatus: 'PENDING',
      toStatus: 'APPROVED',
      approverUserId: (req as any).user.id,
      approverName: (req as any).user.name,
      approverRole: (req as any).user.roles?.[0] || 'BK',
      notes: value.notes,
    },
  });

  // If published and national/international, auto add to hall of fame
  if (value.isPublished && ['NASIONAL', 'INTERNASIONAL'].includes(achievement.level as string)) {
    await prisma.hallOfFame.create({
      data: {
        studentId: achievement.studentId,
        studentName: achievement.studentName,
        studentClass: achievement.studentClass,
        achievementId: achievement.id,
        achievementTitle: achievement.title,
        level: achievement.level as any,
        rank: achievement.rank as any,
        achievementDate: achievement.achievementDate,
        photoUrl: (achievement.photoUrls as string[])?.[0] || null,
        academicYear: achievement.academicYear,
      },
    });
  }

  const studentServiceUrl = process.env.STUDENT_SERVICE_URL || 'http://localhost:3003';
  const notificationServiceUrl = process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3007';
  const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
  const headers = { 'x-internal-secret': internalSecret };

  // Trigger points sync to student-service
  await axios.post(`${studentServiceUrl}/api/v1/internal/students/${achievement.studentId}/points`, {
    pointsChange: achievement.points,
    sourceType: 'ACHIEVEMENT',
    sourceId: achievement.id,
    sourceDescription: achievement.categoryName,
    academicYear: achievement.academicYear,
    semester: achievement.semester
  }, { headers }).catch((e: any) => console.error('Failed to sync points', e.message));

  // Trigger notification
  await axios.post(`${notificationServiceUrl}/api/v1/internal/notifications`, {
    userId: achievement.studentId, // In real app, might want to lookup parent ID
    type: 'ACHIEVEMENT_APPROVED',
    title: 'Prestasi Disetujui',
    message: `Selamat! Prestasi ${achievement.title} oleh ${achievement.studentName} telah disetujui.`,
    data: { achievementId: achievement.id }
  }, { headers }).catch((e: any) => console.error('Failed to send notification', e.message));

  return sendResponse(res, 200, true, 'Achievement approved successfully', updated);
};

export const rejectAchievement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = rejectSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const achievement = await prisma.achievement.findUnique({ where: { id } });
  if (!achievement) return sendError(res, 404, 'Achievement not found');

  const updated = await prisma.achievement.update({
    where: { id },
    data: {
      status: 'REJECTED',
      rejectedAt: new Date(),
      rejectedBy: (req as any).user.id,
      rejectedByName: (req as any).user.name,
      rejectionReason: value.rejectionReason,
    },
  });

  await prisma.achievementApprovalHistory.create({
    data: {
      achievementId: id,
      action: 'REJECT',
      fromStatus: achievement.status,
      toStatus: 'REJECTED',
      approverUserId: (req as any).user.id,
      approverName: (req as any).user.name,
      approverRole: (req as any).user.roles?.[0] || 'BK',
      notes: value.rejectionReason,
    },
  });

  return sendResponse(res, 200, true, 'Achievement rejected', updated);
};
