import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendError } from '../utils/response';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    roles: string[];
    [key: string]: any;
  };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const internalSecret = req.headers['x-internal-secret'];

  // Check Internal Service Secret
  if (internalSecret && internalSecret === process.env.INTERNAL_SECRET) {
    const userId = req.headers['x-user-id'] as string;
    const userRoles = req.headers['x-user-roles'] as string;
    
    if (userId && userRoles) {
      try {
        req.user = {
          id: userId,
          name: 'Internal Propagated User',
          email: 'system@internal.local',
          roles: JSON.parse(userRoles)
        };
      } catch (e) {
        req.user = { 
          id: userId, 
          name: 'Internal Propagated User', 
          email: 'system@internal.local',
          roles: [userRoles] 
        };
      }
    } else {
      req.user = {
        id: 'SYSTEM',
        name: 'Internal System',
        email: 'system@internal.local',
        roles: ['ADMIN', 'SUPERADMIN', 'SYSTEM']
      };
    }
    return next();
  }

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(res, 401, 'Unauthorized: No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const secret = process.env.JWT_SECRET || 'secret';
    const decoded = jwt.verify(token, secret) as any;
    req.user = decoded;
    next();
  } catch (_error) {
    return sendError(res, 401, 'Unauthorized: Invalid or expired token');
  }
};

export const authorize = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return sendError(res, 401, 'Unauthorized: User not authenticated');
    }

    const hasRole = req.user.roles.some((role: string) => roles.includes(role));
    if (!hasRole) {
      return sendError(res, 403, 'Forbidden: You do not have permission to access this resource');
    }

    next();
  };
};
