import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export const getMyNotifications = async (req: Request, res: Response) => {
  const userId = (req as AuthenticatedRequest).user?.id;
  if (!userId) return sendError(res, 401, 'Unauthorized');

  const offset = parseInt(req.headers['x-paging-offset'] as string) || 0;
  const limit = parseInt(req.headers['x-paging-limit'] as string) || 20;

  const [items, total] = await Promise.all([
    prisma.notification.findMany({
      where: { userId },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.notification.count({ where: { userId } }),
  ]);

  return sendResponse(res, 200, true, 'Notifications retrieved', {
    items: items.map(n => ({
      ...n,
      isRead: !!n.readAt
    })),
    pagination: { offset, limit, total },
  });
};

export const markAsRead = async (req: Request, res: Response) => {
  const { notificationIds } = req.body;
  const userId = (req as AuthenticatedRequest).user?.id;


  if (notificationIds && Array.isArray(notificationIds) && notificationIds.length > 0) {
    await prisma.notification.updateMany({
      where: {
        id: { in: notificationIds },
        userId,
      },
      data: { readAt: new Date() },
    });
  } else {
    // Mark ALL as read if no IDs provided
    await prisma.notification.updateMany({
      where: { userId, readAt: null },
      data: { readAt: new Date() },
    });
  }


  return sendResponse(res, 200, true, 'Notifications marked as read');
};
export const getUnreadCount = async (req: Request, res: Response) => {
  const userId = (req as AuthenticatedRequest).user?.id;
  const count = await prisma.notification.count({
    where: { userId, readAt: null },
  });
  return sendResponse(res, 200, true, 'Unread count retrieved', { count });
};


export const sendSummon = async (req: Request, res: Response) => {
  const { studentId, parentId, studentName, parentName, parentEmail, points, violations } = req.body;
  
  // This is a proxy to the internal logic but with role checks (applied in routes)
  const deliveryService = require('../services/delivery.service').default;

  const title = `SURAT PANGGILAN ORANG TUA - ${studentName}`;
  const message = `Yth. Bapak/Ibu ${parentName},\n\nMelalui surat ini, kami mengharapkan kehadiran Bapak/Ibu di sekolah untuk mendiskusikan perkembangan kedisiplinan putra/putri Anda, ${studentName}.\n\nSaat ini, total poin pelanggaran ${studentName} telah mencapai ${points} poin.\n\nDetail pelanggaran terakhir:\n${violations}\n\nMohon hadir pada hari kerja di ruang BK. Atas perhatiannya kami ucapkan terima kasih.`;

  const notification = await prisma.notification.create({
    data: {
      userId: parentId || studentId,
      type: 'PARENT_SUMMONS',
      category: 'VIOLATION',
      title,
      message,
      recipientName: parentName,
      recipientEmail: parentEmail,
      channels: ['EMAIL', 'INTERNAL'],
      status: 'PENDING',
    },
  });

  await deliveryService.deliver(notification.id);

  return sendResponse(res, 200, true, 'Surat panggilan berhasil dikirim');
};

