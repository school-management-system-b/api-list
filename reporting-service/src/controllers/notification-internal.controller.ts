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
    <div style="font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f7fa; padding: 40px 10px;">
      <div style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, ${SCHOOL_CONFIG.COLOR.PRIMARY} 0%, ${SCHOOL_CONFIG.COLOR.SECONDARY} 100%); padding: 50px 40px; text-align: center;">
          <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 50px; margin-bottom: 20px;">
            <span style="color: #ffffff; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Sistem Informasi Siswa</span>
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.2;">Selamat Datang!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 12px 0 0 0; font-size: 18px; font-weight: 400;">${SCHOOL_CONFIG.NAME}</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 45px 40px;">
          <p style="font-size: 18px; color: #1e293b; margin: 0 0 15px 0;">Halo, <strong>${name}</strong></p>
          <p style="font-size: 16px; color: #475569; line-height: 1.6; margin: 0 0 30px 0;">
            Kami senang Anda bergabung. Akun Anda telah berhasil dibuat di platform digital <strong>${SCHOOL_CONFIG.APP_NAME}</strong>. Gunakan kredensial di bawah ini untuk mulai menjelajah:
          </p>
          
          <!-- Credentials Box -->
          <div style="background-color: #f8fafc; border-radius: 12px; padding: 30px; margin-bottom: 35px; border: 1px solid #e2e8f0; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background-color: ${SCHOOL_CONFIG.COLOR.PRIMARY};"></div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 8px;">Username</label>
              <div style="font-size: 20px; color: #0f172a; font-weight: 700; font-family: 'JetBrains Mono', 'Courier New', monospace;">${username}</div>
            </div>
            <div>
              <label style="display: block; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 8px;">Password Sementara</label>
              <div style="font-size: 20px; color: #e11d48; font-weight: 700; font-family: 'JetBrains Mono', 'Courier New', monospace;">${tempPassword}</div>
            </div>
          </div>
          
          <!-- Action Button -->
          <div style="text-align: center; margin-bottom: 40px;">
            <a href="${SCHOOL_CONFIG.WEB_URL}" style="display: inline-block; background-color: ${SCHOOL_CONFIG.COLOR.PRIMARY}; color: #ffffff; padding: 18px 45px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);">
              Masuk ke Dashboard
            </a>
          </div>
          
          <!-- Info Box -->
          <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 20px; border-radius: 10px; display: flex; align-items: flex-start;">
            <div style="color: #d97706; margin-right: 12px; font-size: 20px;">⚠️</div>
            <p style="font-size: 14px; color: #92400e; margin: 0; line-height: 1.5;">
              <strong>Penting:</strong> Demi keamanan data Anda, sangat disarankan untuk segera mengganti password sementara ini setelah berhasil masuk untuk pertama kalinya.
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 14px; color: #64748b; margin: 0 0 10px 0;">Terima kasih atas perhatiannya.</p>
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
            &copy; ${new Date().getFullYear()} ${SCHOOL_CONFIG.NAME}.<br>
            Jl. Raya Berbek, Nganjuk, Jawa Timur.
          </p>
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
    <div style="font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff7ed; padding: 40px 10px;">
      <div style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #fed7aa;">
        <!-- Alert Header -->
        <div style="background-color: #ea580c; padding: 40px 20px; text-align: center;">
          <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 50px; margin-bottom: 15px;">
            <span style="color: #ffffff; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Pemberitahuan Penting</span>
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Surat Panggilan Orang Tua</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">${SCHOOL_CONFIG.NAME}</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 45px 40px;">
          <p style="font-size: 16px; color: #1e293b; margin: 0 0 20px 0;">Yth. Bapak/Ibu <strong>${parentName}</strong>,</p>
          <p style="font-size: 15px; color: #475569; line-height: 1.7; margin: 0 0 30px 0;">
            Melalui surat ini, kami mengharapkan kehadiran Bapak/Ibu di sekolah untuk mendiskusikan perkembangan kedisiplinan putra/putri Anda, <span style="color: #1e293b; font-weight: 700;">${studentName}</span>.
          </p>
          
          <!-- Summary Card -->
          <div style="background-color: #fff7ed; border-radius: 12px; padding: 25px; margin-bottom: 35px; border: 1px solid #ffedd5;">
            <h3 style="margin: 0 0 15px 0; font-size: 14px; color: #9a3412; text-transform: uppercase; letter-spacing: 1px;">Ringkasan Kedisiplinan</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #fed7aa; padding-bottom: 8px;">
                <span style="color: #7c2d12; font-size: 14px;">Total Akumulasi Poin</span>
                <span style="color: #ea580c; font-weight: 800; font-size: 16px;">${points} Poin</span>
              </div>
              <div style="padding-top: 5px;">
                <span style="display: block; color: #7c2d12; font-size: 14px; margin-bottom: 5px;">Keterangan Pelanggaran:</span>
                <div style="background: white; padding: 12px; border-radius: 8px; font-size: 14px; color: #431407; line-height: 1.6; border: 1px solid #ffedd5;">
                  ${violations.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
          </div>
          
          <div style="background-color: #eff6ff; border-radius: 12px; padding: 20px; border-left: 4px solid #2563eb; margin-bottom: 35px;">
            <p style="font-size: 14px; color: #1e40af; margin: 0; line-height: 1.6;">
              <strong>Lokasi Pertemuan:</strong><br>
              Gedung Utama - Ruang Bimbingan Konseling (BK)<br>
              Jam Layanan: 08:00 - 14:00 WIB
            </p>
          </div>
          
          <p style="font-size: 15px; color: #475569; line-height: 1.7; margin: 0 0 40px 0;">
            Kehadiran Bapak/Ibu sangat penting demi keberhasilan proses pembinaan karakter siswa di sekolah. Terima kasih atas kerja samanya.
          </p>
          
          <!-- Signature -->
          <div style="border-top: 2px solid #f1f5f9; padding-top: 30px;">
            <p style="font-size: 14px; color: #64748b; margin: 0;">Hormat kami,</p>
            <div style="margin-top: 15px;">
              <p style="font-size: 18px; color: #0f172a; font-weight: 800; margin: 0;">Bagian Kesiswaan & BK</p>
              <p style="font-size: 14px; color: #64748b; margin: 5px 0 0 0;">${SCHOOL_CONFIG.NAME}</p>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #f1f5f9;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
            Surat ini dihasilkan secara otomatis oleh Sistem Informasi Siswa.<br>
            &copy; ${new Date().getFullYear()} ${SCHOOL_CONFIG.NAME}
          </p>
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

