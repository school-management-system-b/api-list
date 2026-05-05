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

import { SCHOOL_CONFIG } from '../config/constants';

export const sendWelcomeEmail = async (req: Request, res: Response) => {
  const { id, username, email, name, tempPassword } = req.body;

  if (!email || !tempPassword) {
    return sendError(res, 400, 'Email and tempPassword are required');
  }

  const title = `Selamat Datang di ${SCHOOL_CONFIG.APP_NAME}`;
  
  // Premium HTML Template
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 40px 20px;">
      <div style="background-color: white; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
        <div style="background-color: ${SCHOOL_CONFIG.COLOR.PRIMARY}; padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Selamat Datang!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">${SCHOOL_CONFIG.NAME}</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; color: #334155; line-height: 1.6; margin: 0 0 25px 0;">Halo <strong>${name}</strong>,</p>
          <p style="font-size: 16px; color: #475569; line-height: 1.6; margin: 0 0 30px 0;">Akun Anda telah berhasil dibuat di <strong>${SCHOOL_CONFIG.APP_NAME}</strong>. Berikut adalah kredensial login Anda untuk mengakses sistem:</p>
          
          <div style="background-color: #f1f5f9; border-radius: 16px; padding: 25px; margin-bottom: 35px; border: 1px dashed #cbd5e1;">
            <div style="margin-bottom: 15px;">
              <span style="display: block; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 4px;">Username</span>
              <span style="font-size: 18px; color: #1e293b; font-weight: 700;">${username}</span>
            </div>
            <div>
              <span style="display: block; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 4px;">Password Sementara</span>
              <span style="font-size: 18px; color: #ef4444; font-weight: 700; font-family: monospace;">${tempPassword}</span>
            </div>
          </div>
          
          <div style="text-align: center; margin-bottom: 35px;">
            <a href="${SCHOOL_CONFIG.WEB_URL}" style="display: inline-block; background-color: ${SCHOOL_CONFIG.COLOR.PRIMARY}; color: white; padding: 16px 40px; border-radius: 14px; text-decoration: none; font-weight: 600; font-size: 16px; transition: background-color 0.3s ease;">Login Sekarang</a>
          </div>
          
          <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px 20px; border-radius: 8px;">
            <p style="font-size: 14px; color: #92400e; margin: 0;"><strong>Penting:</strong> Demi keamanan, silakan ganti password Anda segera setelah login pertama kali.</p>
          </div>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">&copy; ${new Date().getFullYear()} ${SCHOOL_CONFIG.NAME}. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </div>
  `;

  const notification = await prisma.notification.create({
    data: {
      userId: id,
      type: 'WELCOME_EMAIL',
      category: 'SYSTEM',
      title,
      message: `Akun Anda telah berhasil dibuat. Username: ${username}, Password: ${tempPassword}`, // Fallback for plain text
      recipientName: name,
      recipientEmail: email,
      channels: ['EMAIL'],
      status: 'PENDING',
      metadata: { html: htmlBody } // Pass custom HTML in metadata
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
  
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff7ed; padding: 40px 20px;">
      <div style="background-color: white; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #ffedd5;">
        <div style="background-color: #ea580c; padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">Surat Panggilan Orang Tua</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">${SCHOOL_CONFIG.NAME}</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; color: #334155; line-height: 1.6; margin: 0 0 20px 0;">Yth. Bapak/Ibu <strong>${parentName}</strong>,</p>
          <p style="font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 25px 0;">Melalui surat ini, kami mengharapkan kehadiran Bapak/Ibu di sekolah untuk mendiskusikan perkembangan kedisiplinan putra/putri Anda, <strong>${studentName}</strong>.</p>
          
          <div style="background-color: #fff7ed; border-radius: 16px; padding: 20px; margin-bottom: 30px; border: 1px solid #ffedd5;">
            <p style="margin: 0 0 10px 0; font-size: 14px; color: #9a3412;"><strong>Ringkasan Kedisiplinan:</strong></p>
            <table style="width: 100%; font-size: 14px; color: #431407;">
              <tr><td style="padding: 5px 0; width: 120px;">Total Poin:</td><td><strong>${points} Poin</strong></td></tr>
              <tr><td style="padding: 5px 0; vertical-align: top;">Pelanggaran:</td><td style="line-height: 1.5;">${violations.replace(/\n/g, '<br>')}</td></tr>
            </table>
          </div>
          
          <p style="font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 30px 0;">Mohon Bapak/Ibu dapat hadir pada hari kerja di <strong>Ruang Bimbingan Konseling (BK)</strong>. Kehadiran Bapak/Ibu sangat penting bagi pembinaan siswa.</p>
          
          <div style="border-top: 1px solid #f1f5f9; pt: 25px; padding-top: 25px;">
            <p style="font-size: 14px; color: #64748b; margin: 0;">Hormat kami,</p>
            <p style="font-size: 16px; color: #1e293b; font-weight: 700; margin: 5px 0 0 0;">Bagian Kesiswaan & BK</p>
            <p style="font-size: 14px; color: #64748b; margin: 2px 0 0 0;">${SCHOOL_CONFIG.NAME}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const notification = await prisma.notification.create({
    data: {
      userId: parentId || studentId,
      type: 'PARENT_SUMMONS',
      category: 'VIOLATION',
      title,
      message: `Surat panggilan untuk orang tua ${studentName}. Total poin: ${points}`,
      recipientName: parentName,
      recipientEmail: parentEmail,
      channels: ['EMAIL', 'INTERNAL'],
      status: 'PENDING',
      metadata: { html: htmlBody }
    },
  });

  await deliveryService.deliver(notification.id);

  return sendResponse(res, 200, true, 'Parent summons email sent successfully');
};

