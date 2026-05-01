import amqp from 'amqplib';
import logger from '../config/logger';

class MessageBrokerService {
  private connection: amqp.Connection | null = null;
  private channel: amqp.Channel | null = null;

  async init() {
    try {
      const url = process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672';
      this.connection = await amqp.connect(url);
      this.channel = await this.connection.createChannel();
      logger.info('🚀 Connected to RabbitMQ');
    } catch (error) {
      logger.error('❌ Failed to connect to RabbitMQ:', error.message);
    }
  }

  async publishMessage(exchange: string, routingKey: string, message: any) {
    try {
      if (!this.channel) {
        await this.init();
      }

      if (this.channel) {
        await this.channel.assertExchange(exchange, 'topic', { durable: true });
        this.channel.publish(
          exchange,
          routingKey,
          Buffer.from(JSON.stringify(message)),
          { persistent: true }
        );
        logger.info(`📤 Published message to ${exchange} with key ${routingKey}`);
      }
    } catch (error) {
      logger.error('❌ Error publishing message:', error.message);
    }
  }
}

export const messageBroker = new MessageBrokerService();
