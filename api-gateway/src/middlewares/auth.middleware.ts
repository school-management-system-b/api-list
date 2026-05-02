import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendError } from '@microservices/common';
import axios from 'axios';
import logger from '../config/logger';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(res, 401, 'Unauthorized: No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const secret = process.env.JWT_SECRET || 'secret';
    const decoded = jwt.verify(token, secret);

    // Check token blacklist
    try {
      const authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
      const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
      
      const response = await axios.post(`${authServiceUrl}/api/v1/internal/token/check`, { token }, {
        headers: { 'x-internal-secret': internalSecret }
      });
      
      if (response.data.data?.isBlacklisted) {
        return sendError(res, 401, 'Unauthorized: Token is revoked');
      }
    } catch (err: any) {
      logger.error('Failed to check token blacklist: ' + err.message);
      // Proceed even if check fails to prevent auth service downtime from blocking the whole app?
      // For strict security, we might want to return 401. For resilience, we let it pass.
      // Let's let it pass with a warning.
    }

    // Attach user info to headers for downstream microservices
    req.headers['x-user-id'] = (decoded as any).id;
    req.headers['x-user-username'] = (decoded as any).username;
    req.headers['x-user-roles'] = JSON.stringify((decoded as any).roles || []);

    next();
  } catch (error) {
    return sendError(res, 401, 'Unauthorized: Invalid or expired token');
  }
};

export const optionalAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const secret = process.env.JWT_SECRET || 'secret';
      const decoded = jwt.verify(token, secret);
      req.headers['x-user-id'] = (decoded as any).id;
      req.headers['x-user-username'] = (decoded as any).username;
      req.headers['x-user-roles'] = JSON.stringify((decoded as any).roles || []);
    } catch (error) {
      // Ignore error for optional auth
    }
  }
  next();
};
