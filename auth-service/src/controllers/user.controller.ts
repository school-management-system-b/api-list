import { Request, Response } from 'express';
import { sendResponse, sendError } from '../utils/response';
import { createUserSchema, bulkCreateUserSchema, activateAccountSchema } from '../validators/auth.validator';
import { userService } from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
  const { error, value } = createUserSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  try {
    const createdBy = (req as any).user?.id || 'SYSTEM';
    const result = await userService.createUser(value, createdBy);
    return sendResponse(res, 201, true, 'User created and notification queued', result);
  } catch (err: any) {
    return sendError(res, err.status || 500, err.message);
  }
};

export const bulkCreateUsers = async (req: Request, res: Response) => {
  const { error, value } = bulkCreateUserSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  try {
    const createdBy = (req as any).user?.id || 'SYSTEM';
    const results = await userService.bulkCreateUsers(value, createdBy);
    return sendResponse(res, 201, true, 'Bulk user creation completed', results);
  } catch (err: any) {
    return sendError(res, err.status || 500, err.message);
  }
};

export const activateAccount = async (req: Request, res: Response) => {
  const { error, value } = activateAccountSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  try {
    const userId = (req as any).user.id;
    await userService.activateAccount(userId, value);
    return sendResponse(res, 200, true, 'Account activated successfully. You can now use your new password.');
  } catch (err: any) {
    return sendError(res, err.status || 500, err.message);
  }
};
