import { Notification } from '@prisma/client';
import prisma from '../config/prisma';
import logger from '../config/logger';
import nodemailer from 'nodemailer';
import axios from 'axios';
import { SCHOOL_CONFIG } from '../config/constants';

class DeliveryService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async deliver(notificationId: string): Promise<void> {
    const notification = await prisma.notification.findUnique({ where: { id: notificationId } });
    if (!notification) return;

    // Resolve recipient if missing
    if (!notification.recipientEmail && notification.userId) {
      await this.resolveUserContact(notification);
    }

    const channels = (notification.channels as string[]) || ['INTERNAL'];
    let success = true;
    const failures: string[] = [];

    for (const channel of channels) {
      try {
        switch (channel) {
          case 'INTERNAL':
            await this.sendInternal(notification);
            break;
          case 'EMAIL':
            await this.sendEmail(notification);
            break;
          case 'WA':
            await this.sendWhatsApp(notification);
            break;
        }
      } catch (error: unknown) {
        success = false;
        const errorMessage = error instanceof Error ? error.message : String(error);
        failures.push(`${channel}: ${errorMessage}`);
        logger.error(`Failed to deliver via ${channel}:`, error);
      }
    }

    await prisma.notification.update({
      where: { id: notificationId },
      data: {
        status: success ? 'SENT' : failures.length === channels.length ? 'FAILED' : 'SENT',
        failureReason: failures.length > 0 ? failures.join('; ') : null,
      },
    });
  }

  private async resolveUserContact(notification: Notification): Promise<void> {
    try {
      const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
      // We assume an internal endpoint exists to check user details by ID
      // For now, we mock it or fetch from auth-service if implemented
      const res = await axios.get(
        `${AUTH_SERVICE_URL}/api/v1/auth/internal/user/${notification.userId}`
      );
      if (res.data.success) {
        await prisma.notification.update({
          where: { id: notification.id },
          data: {
            recipientName: res.data.data.name,
            recipientEmail: res.data.data.email,
          },
        });
        // Update local object reference
        notification.recipientName = res.data.data.name;
        notification.recipientEmail = res.data.data.email;
      }
    } catch (error) {
      logger.error(`Failed to resolve user contact for ${notification.userId}:`, error);
    }
  }

  private async sendInternal(notification: Notification): Promise<void> {
    logger.info(
      `Notification ${notification.id} delivered internally to user ${notification.userId}`
    );
  }

  private async sendEmail(notification: Notification): Promise<void> {
    if (!notification.recipientEmail) {
      throw new Error('No recipient email available');
    }

    const metadata = notification.metadata as any;
    let htmlContent = metadata?.html;

    if (!htmlContent) {
      // Default Professional Wrapper for plain messages
      htmlContent = `
        <div style="font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f7fa; padding: 40px 10px;">
          <div style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
            <div style="background: linear-gradient(135deg, ${SCHOOL_CONFIG.COLOR.PRIMARY} 0%, ${SCHOOL_CONFIG.COLOR.SECONDARY} 100%); padding: 30px 40px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">${notification.title}</h2>
              <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0; font-size: 14px;">${SCHOOL_CONFIG.NAME}</p>
            </div>
            <div style="padding: 40px;">
              <div style="font-size: 16px; color: #334155; line-height: 1.6; margin-bottom: 30px;">
                ${notification.message.replace(/\n/g, '<br>')}
              </div>
              <div style="text-align: center;">
                <a href="${SCHOOL_CONFIG.WEB_URL}" style="display: inline-block; background-color: ${SCHOOL_CONFIG.COLOR.PRIMARY}; color: #ffffff; padding: 14px 30px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">Buka Aplikasi</a>
              </div>
            </div>
            <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 12px; color: #94a3b8; margin: 0;">&copy; ${new Date().getFullYear()} ${SCHOOL_CONFIG.NAME}. Semua hak cipta dilindungi.</p>
            </div>
          </div>
        </div>
      `;
    }

    await this.transporter.sendMail({
      from: process.env.FROM_EMAIL || `"${SCHOOL_CONFIG.NAME}" <noreply@school.com>`,
      to: notification.recipientEmail,
      subject: notification.title,
      text: notification.message,
      html: htmlContent,
    });

    logger.info(`Email sent to ${notification.recipientEmail}: ${notification.title}`);
  }

  private async sendWhatsApp(notification: Notification): Promise<void> {
    logger.info(`[MOCK] WA sent to user ${notification.userId}: ${notification.title}`);
  }
}

export default new DeliveryService();
