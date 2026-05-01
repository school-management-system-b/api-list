import { RabbitMQ } from '@microservices/common';
import prisma from '../config/prisma';
import logger from '../config/logger';

export const initRabbitMQConsumer = async () => {
  try {
    const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672';
    await RabbitMQ.connect(RABBITMQ_URL);
    
    logger.info('🚀 User Service RabbitMQ Consumer initialized');
    
    // Listen for user creation events to automatically create a profile
    await RabbitMQ.consumeExchange('user.exchange', 'user_service.user_created', 'user.created', async (data) => {
      logger.info('Received user.created event for profile creation:', data.username);
      
      try {
        // Check if profile already exists
        const existing = await prisma.userProfile.findUnique({
          where: { userId: data.id }
        });

        if (existing) {
          logger.info(`Profile for user ${data.username} already exists, skipping.`);
          return;
        }

        // Create the base profile
        await prisma.userProfile.create({
          data: {
            userId: data.id,
            username: data.username,
            email: data.email,
            name: data.name,
            nip_nis: data.nip_nis || null,
            isActive: true,
            createdBy: 'SYSTEM_EVENT',
          },
        });

        logger.info(`✅ Successfully created profile for user ${data.username}`);
      } catch (error) {
        logger.error('❌ Error creating user profile from event:', error.message);
      }
    });
  } catch (error) {
    logger.error('❌ Failed to initialize User Service RabbitMQ consumer:', error);
    setTimeout(initRabbitMQConsumer, 5000);
  }
};
