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

  if (!userId) {
    // If we're testing directly and have a Bearer token, we'd normally decode it here.
    // Since we don't have jsonwebtoken installed in this service yet, 
    // we'll rely on the x-user-id header which can be sent by the test script.
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
