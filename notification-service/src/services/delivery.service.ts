import { Notification } from '@prisma/client';
import prisma from '../config/prisma';
import logger from '../config/logger';
import nodemailer from 'nodemailer';
import axios from 'axios';

class DeliveryService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
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

    await this.transporter.sendMail({
      from: process.env.EMAIL_FROM || '"School System" <noreply@school.com>',
      to: notification.recipientEmail,
      subject: notification.title,
      text: notification.message,
      html: `<p>${notification.message.replace(/\n/g, '<br>')}</p>`,
    });

    logger.info(`Email sent to ${notification.recipientEmail}: ${notification.title}`);
  }

  private async sendWhatsApp(notification: Notification): Promise<void> {
    logger.info(`[MOCK] WA sent to user ${notification.userId}: ${notification.title}`);
  }
}

export default new DeliveryService();
