import * as amqp from 'amqplib';

export class RabbitMQ {
  private static connection: any = null;
  private static channel: any = null;

  static async connect(url: string = process.env.RABBITMQ_URL || 'amqp://localhost'): Promise<void> {
    if (this.connection) return;

    try {
      this.connection = await amqp.connect(url);
      this.channel = await this.connection.createChannel();
      console.log('Connected to RabbitMQ');
      
      if (this.connection) {
        this.connection.on('error', (err: any) => {
          console.error('RabbitMQ connection error', err);
          this.connection = null;
        });
        
        this.connection.on('close', () => {
          console.log('RabbitMQ connection closed');
          this.connection = null;
        });
      }
    } catch (error) {
      console.error('Failed to connect to RabbitMQ', error);
      throw error;
    }
  }

  static async publish(queue: string, message: any): Promise<boolean> {
    if (!this.channel) {
      await this.connect();
    }
    
    await this.channel.assertQueue(queue, { durable: true });
    return this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
  }

  static async consume(queue: string, callback: (msg: any) => void): Promise<void> {
    if (!this.channel) {
      await this.connect();
    }
    
    await this.channel.assertQueue(queue, { durable: true });
    this.channel.consume(queue, (msg: any) => {
      if (msg !== null) {
        try {
          const content = JSON.parse(msg.content.toString());
          callback(content);
          this.channel.ack(msg);
        } catch (error) {
          console.error('Error processing message', error);
          this.channel.nack(msg, false, true);
        }
      }
    });
  }

  static async consumeExchange(exchange: string, queue: string, routingKey: string, callback: (msg: any) => void): Promise<void> {
    if (!this.channel) {
      await this.connect();
    }
    
    await this.channel.assertExchange(exchange, 'topic', { durable: true });
    await this.channel.assertQueue(queue, { durable: true });
    await this.channel.bindQueue(queue, exchange, routingKey);

    this.channel.consume(queue, (msg: any) => {
      if (msg !== null) {
        try {
          const content = JSON.parse(msg.content.toString());
          callback(content);
          this.channel.ack(msg);
        } catch (error) {
          console.error('Error processing exchange message', error);
          this.channel.nack(msg, false, true);
        }
      }
    });
  }

  static async close(): Promise<void> {
    if (this.channel) await this.channel.close();
    if (this.connection) await this.connection.close();
    this.channel = null;
    this.connection = null;
  }
}
