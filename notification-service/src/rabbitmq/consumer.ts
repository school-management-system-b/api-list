import { RabbitMQ } from '@microservices/common';
import prisma from '../config/prisma';
import deliveryService from '../services/delivery.service';
import logger from '../config/logger';

export const initRabbitMQConsumer = async () => {
  try {
    const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://rabbitmq:5672';
    await RabbitMQ.connect(RABBITMQ_URL);
    
    console.log('RabbitMQ Consumer initialized for notifications');
    
    await RabbitMQ.consume('notifications', async (data) => {
      // ... existing code ...
    });

    // Listen for user creation events to send blast email
    await RabbitMQ.consumeExchange('user.exchange', 'notification.user_created', 'user.created', async (data) => {
      logger.info('Received user.created event for notification:', data.username);
      
      try {
        const title = 'Selamat Datang di Sistem Sekolah';
        const message = `Halo ${data.name},\n\nAkun Anda telah berhasil dibuat.\n\nBerikut adalah kredensial login Anda:\nUsername: ${data.username}\nPassword: ${data.tempPassword}\n\nSilakan login dan ganti password Anda segera di: https://sekolah-app.com/login\n\nTerima kasih.`;

        await prisma.notification.create({
          data: {
            userId: data.id,
            title,
            message,
            recipientName: data.name,
            recipientEmail: data.email,
            channels: ['EMAIL'],
            status: 'PENDING',
          },
        });

        // Trigger delivery immediately for blast email
        // We'll let the existing delivery logic handle it via the DB if needed, 
        // but here we can just call deliveryService directly or wait for another process.
        // For simplicity, we create and then let a separate process or immediate call handle it.
        const latest = await prisma.notification.findFirst({
            where: { userId: data.id, title },
            orderBy: { createdAt: 'desc' }
        });
        if (latest) await deliveryService.deliver(latest.id);

      } catch (error) {
        logger.error('Error handling user.created notification:', error);
      }
    });
  } catch (error) {
    logger.error('Failed to initialize RabbitMQ consumer:', error);
    // Retry logic could be added here
    setTimeout(initRabbitMQConsumer, 5000);
  }
};
