import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendError } from '../utils/response';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(); // Continue without user if no token
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    (req as any).user = decoded;
    next();
  } catch (error) {
    return sendError(res, 401, 'Unauthorized: Invalid or expired token');
  }
};

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user) {
      return sendError(res, 401, 'Unauthorized: User not authenticated');
    }

    const hasRole = user.roles?.some((role: string) => roles.includes(role));
    if (!hasRole) {
      return sendError(res, 403, 'Forbidden: You do not have permission to access this resource');
    }

    next();
  };
};
