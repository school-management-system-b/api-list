import { Request, Response, NextFunction } from 'express';
import { sendError } from '@microservices/common/utils/response';

/**
 * Middleware to authenticate requests.
 * In a microservice architecture, the Gateway usually handles JWT verification
 * and passes user information via custom headers.
 * 
 * This middleware populates req.user from those headers.
 */
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.headers['x-user-id'] as string;
  const username = req.headers['x-user-username'] as string;
  const rolesHeader = req.headers['x-user-roles'] as string;
  const internalSecret = req.headers['x-internal-secret'];

  // Check Internal Service Secret
  if (internalSecret && internalSecret === process.env.INTERNAL_SECRET) {
    if (userId && rolesHeader) {
      try {
        (req as any).user = {
          id: userId,
          username: username || 'internal',
          roles: JSON.parse(rolesHeader)
        };
        return next();
      } catch (e) {
        // Fallback
      }
    }
    
    (req as any).user = {
      id: userId || 'SYSTEM',
      username: username || 'SYSTEM',
      roles: ['ADMIN', 'SUPERADMIN', 'SYSTEM']
    };
    return next();
  }

  if (!userId) {
    return sendError(res, 401, 'Unauthorized: Missing user context');
  }

  try {
    const roles = rolesHeader ? JSON.parse(rolesHeader) : [];
    
    (req as any).user = {
      id: userId,
      username: username,
      roles: roles
    };
    
    next();
  } catch (error) {
    return sendError(res, 401, 'Unauthorized: Invalid user context format');
  }
};
