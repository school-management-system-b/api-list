import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response';

export const internalAuth = (req: Request, res: Response, next: NextFunction) => {
  const secret = req.headers['x-internal-secret'];
  const expectedSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';

  if (!secret || secret !== expectedSecret) {
    return sendError(res, 401, 'Unauthorized internal access');
  }

  next();
};
