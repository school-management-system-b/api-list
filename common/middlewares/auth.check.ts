import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response';

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.headers['x-user-id'];

    if (!userId) {
        return sendError(res, 401, 'Unauthorized: Required user metadata missing');
    }

    // Optional: Add more checks here if needed

    next();
};

export const roleCheck = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRolesHeader = req.headers['x-user-roles'];

        if (!userRolesHeader) {
            return sendError(res, 403, 'Forbidden: User roles missing');
        }

        try {
            const userRoles: string[] = JSON.parse(userRolesHeader as string);
            const hasRole = roles.some(role => userRoles.includes(role));

            if (!hasRole) {
                return sendError(res, 403, `Forbidden: Requires one of these roles: ${roles.join(', ')}`);
            }

            next();
        } catch (error) {
            return sendError(res, 403, 'Forbidden: Invalid user roles format');
        }
    };
};
