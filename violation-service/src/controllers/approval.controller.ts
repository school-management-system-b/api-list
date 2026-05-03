import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import {
  approveWaliKelasSchema,
  approveBKSchema,
  rejectSchema,
} from '../validators/violation.validator';

export const approveWaliKelas = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = approveWaliKelasSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const violation = await prisma.violation.findUnique({ where: { id } });
  if (!violation) return sendError(res, 404, 'Violation not found');
  if (violation.status !== 'PENDING')
    return sendError(res, 400, 'Violation is not in PENDING status');

  const updated = await prisma.violation.update({
    where: { id },
    data: {
      status: 'APPROVED_WALI',
      approvedByWaliAt: new Date(),
      approvedByWaliBy: (req as any).user.id,
      approvedByWaliName: (req as any).user.name,
      waliKelasNotes: value.notes,
    },
  });

  await prisma.violationApprovalHistory.create({
    data: {
      violationId: id,
      action: 'APPROVE_WALI',
      fromStatus: 'PENDING',
      toStatus: 'APPROVED_WALI',
      approverUserId: (req as any).user.id,
      approverName: (req as any).user.name,
      approverRole: (req as any).user.roles?.[0] || 'WALIKELAS',
      notes: value.notes,
    },
  });

  return sendResponse(res, 200, true, 'Violation approved by Wali Kelas', updated);
};

import axios from 'axios';

export const approveBK = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = approveBKSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const violation = await prisma.violation.findUnique({ where: { id } });
  if (!violation) return sendError(res, 404, 'Violation not found');
  if (violation.status !== 'APPROVED_WALI') {
    return sendError(res, 400, 'Violation must be approved by Wali Kelas first');
  }

  const updated = await prisma.violation.update({
    where: { id },
    data: {
      status: 'APPROVED_BK',
      approvedByBKAt: new Date(),
      approvedByBKBy: (req as any).user.id,
      approvedByBKName: (req as any).user.name,
      bkNotes: value.notes,
      sanction: value.sanction,
      sanctionStartDate: value.sanctionStartDate,
      sanctionEndDate: value.sanctionEndDate,
    },
  });

  await prisma.violationApprovalHistory.create({
    data: {
      violationId: id,
      action: 'APPROVE_BK',
      fromStatus: violation.status,
      toStatus: 'APPROVED_BK',
      approverUserId: (req as any).user.id,
      approverName: (req as any).user.name,
      approverRole: (req as any).user.roles?.[0] || 'BK',
      notes: value.notes,
    },
  });

  const studentServiceUrl = process.env.STUDENT_SERVICE_URL || 'http://localhost:3003';
  const notificationServiceUrl = process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3007';
  const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
  const headers = { 'x-internal-secret': internalSecret };

  // Sync points to student-service
  await axios.post(`${studentServiceUrl}/api/v1/internal/students/${violation.studentId}/points`, {
    pointsChange: -violation.points,
    sourceType: 'VIOLATION',
    sourceId: violation.id,
    sourceDescription: violation.categoryName,
    academicYear: violation.academicYear,
    semester: violation.semester,
    recordedBy: (req as any).user.id,
  }, { headers }).catch((e: any) => console.error('Failed to sync points', e.message));

  // Get student info to find parentId
  const studentRes = await axios.get(`${studentServiceUrl}/api/v1/internal/students/${violation.studentId}`, { headers })
    .catch(() => null);
  const parentId = studentRes?.data?.data?.parentId;

  // Trigger notification to Parent (and Student)
  const recipients = [violation.studentId];
  if (parentId) recipients.push(parentId);

  for (const recipientId of recipients) {
    await axios.post(`${notificationServiceUrl}/api/v1/internal/notifications`, {
      userId: recipientId,
      type: 'VIOLATION_APPROVED_BK',
      title: 'Pelanggaran Disetujui BK',
      message: `Siswa ${violation.studentName} melakukan pelanggaran ${violation.categoryName}. Sanksi: ${value.sanction || 'Belum ada'}.`,
      data: { violationId: violation.id },
      category: 'VIOLATION',
      channels: ['IN_APP', 'EMAIL']
    }, { headers }).catch((e: any) => console.error(`Failed to send notification to ${recipientId}`, e.message));
  }

  return sendResponse(res, 200, true, 'Violation approved by BK (Final)', updated);
};

export const rejectViolation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = rejectSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const violation = await prisma.violation.findUnique({ where: { id } });
  if (!violation) return sendError(res, 404, 'Violation not found');

  const updated = await prisma.violation.update({
    where: { id },
    data: {
      status: 'REJECTED',
      rejectedAt: new Date(),
      rejectedBy: (req as any).user.id,
      rejectedByName: (req as any).user.name,
      rejectionReason: value.rejectionReason,
      rejectionLevel: value.rejectionLevel,
    },
  });

  await prisma.violationApprovalHistory.create({
    data: {
      violationId: id,
      action: 'REJECT',
      fromStatus: violation.status,
      toStatus: 'REJECTED',
      approverUserId: (req as any).user.id,
      approverName: (req as any).user.name,
      approverRole: (req as any).user.roles?.[0] || 'STAFF',
      notes: value.rejectionReason,
    },
  });

  return sendResponse(res, 200, true, 'Violation rejected', updated);
};
