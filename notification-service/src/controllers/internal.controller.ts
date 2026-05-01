import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import { triggerNotificationSchema } from '../validators/notification.validator';
import deliveryService from '../services/delivery.service';

export const triggerNotification = async (req: Request, res: Response) => {
  const { error, value } = triggerNotificationSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const notification = await prisma.notification.create({
    data: value,
  });

  // Async delivery
  deliveryService.deliver(notification.id);

  return sendResponse(res, 201, true, 'Notification queued', notification);
};

export const triggerBatchNotification = async (req: Request, res: Response) => {
  const notifications = req.body.notifications;
  if (!Array.isArray(notifications)) return sendError(res, 400, 'Invalid notifications array');

  const created = [];
  for (const n of notifications) {
    const { error, value } = triggerNotificationSchema.validate(n);
    if (!error) {
      const item = await prisma.notification.create({ data: value });
      deliveryService.deliver(item.id);
      created.push(item);
    }
  }

  return sendResponse(res, 200, true, `${created.length} notifications queued`, created);
};

export const triggerUrgentAlert = async (req: Request, res: Response) => {
  const { error, value } = triggerNotificationSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const notification = await prisma.notification.create({
    data: {
      ...value,
      status: 'PENDING',
    },
  });

  // Forced immediate delivery for alerts
  await deliveryService.deliver(notification.id);

  return sendResponse(res, 201, true, 'Urgent alert delivered', notification);
};
