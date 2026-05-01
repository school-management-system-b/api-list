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
    items,
    pagination: { offset, limit, total },
  });
};

export const markAsRead = async (req: Request, res: Response) => {
  const { notificationIds } = req.body;
  const userId = (req as AuthenticatedRequest).user?.id;

  await prisma.notification.updateMany({
    where: {
      id: { in: notificationIds },
      userId,
    },
    data: { readAt: new Date() },
  });

  return sendResponse(res, 200, true, 'Notifications marked as read');
};

export const getUnreadCount = async (req: Request, res: Response) => {
  const userId = (req as AuthenticatedRequest).user?.id;
  const count = await prisma.notification.count({
    where: { userId, readAt: null },
  });
  return sendResponse(res, 200, true, 'Unread count retrieved', { count });
};
