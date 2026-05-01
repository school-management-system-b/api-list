import { Response } from 'express';

export const healthCheck = (serviceName: string) => {
    return (req: any, res: Response) => {
        res.status(200).json({
            status: 'UP',
            service: serviceName,
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            memoryUsage: process.memoryUsage(),
        });
    };
};
