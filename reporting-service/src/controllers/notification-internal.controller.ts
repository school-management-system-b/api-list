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

export const sendWelcomeEmail = async (req: Request, res: Response) => {
  const { id, username, email, name, tempPassword } = req.body;

  if (!email || !tempPassword) {
    return sendError(res, 400, 'Email and tempPassword are required');
  }

  const title = 'Selamat Datang di Sistem Sekolah';
  const message = `Halo ${name},\n\nAkun Anda telah berhasil dibuat.\n\nBerikut adalah kredensial login Anda:\nUsername: ${username}\nPassword: ${tempPassword}\n\nSilakan login dan ganti password Anda segera di: https://sekolah-app.com/login\n\nTerima kasih.`;

  const notification = await prisma.notification.create({
    data: {
      userId: id,
      type: 'WELCOME_EMAIL',
      category: 'SYSTEM',
      title,
      message,
      recipientName: name,
      recipientEmail: email,
      channels: ['EMAIL'],
      status: 'PENDING',
    },
  });

  // Immediate delivery
  await deliveryService.deliver(notification.id);

  return sendResponse(res, 200, true, 'Welcome email sent successfully');
};

export const sendParentSummons = async (req: Request, res: Response) => {
  const { studentId, parentId, studentName, parentName, parentEmail, points, violations } = req.body;

  if (!parentEmail) {
    return sendError(res, 400, 'parentEmail is required');
  }

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

  return sendResponse(res, 200, true, 'Parent summons email sent successfully');
};

