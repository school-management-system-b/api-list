import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response';

/**
 * Middleware to protect internal-only endpoints.
 * Only allows requests that carry the correct x-internal-secret header.
 * This prevents external callers from hitting internal service APIs.
 */
export const internalAuth = (req: Request, res: Response, next: NextFunction) => {
  const secret = req.headers['x-internal-secret'];
  const expectedSecret = process.env.INTERNAL_SECRET;

  if (!expectedSecret) {
    console.error('INTERNAL_SECRET env variable is not set!');
    return sendError(res, 500, 'Server misconfiguration');
  }

  if (!secret || secret !== expectedSecret) {
    return sendError(res, 403, 'Forbidden: Internal access only');
  }

  next();
};
