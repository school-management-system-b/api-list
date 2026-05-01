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
      logger.info('Received notification request from RabbitMQ:', data);
      
      try {
        // Create notification record
        const notification = await prisma.notification.create({
          data: {
            ...data,
            status: 'PENDING',
          },
        });
        
        // Deliver the notification
        await deliveryService.deliver(notification.id);
        logger.info(`Notification ${notification.id} processed from queue`);
      } catch (error) {
        logger.error('Error processing notification from queue:', error);
        // In a real system, you might want to retry or send to a Dead Letter Queue
      }
    });
  } catch (error) {
    logger.error('Failed to initialize RabbitMQ consumer:', error);
    // Retry logic could be added here
    setTimeout(initRabbitMQConsumer, 5000);
  }
};
