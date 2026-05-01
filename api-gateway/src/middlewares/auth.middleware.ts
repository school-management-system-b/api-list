import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendError } from '@microservices/common';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(res, 401, 'Unauthorized: No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const secret = process.env.JWT_SECRET || 'secret';
    const decoded = jwt.verify(token, secret);

    // Attach user info to headers for downstream microservices
    req.headers['x-user-id'] = (decoded as any).id;
    req.headers['x-user-username'] = (decoded as any).username;
    req.headers['x-user-roles'] = JSON.stringify((decoded as any).roles || []);

    next();
  } catch (error) {
    return sendError(res, 401, 'Unauthorized: Invalid or expired token');
  }
};

export const optionalAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
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
