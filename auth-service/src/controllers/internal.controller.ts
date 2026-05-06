import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import { userService } from '../services/user.service';

export const getUserForInternal = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      isActive: true,
    },
  });

  if (!user) return sendError(res, 404, 'User not found');

  return sendResponse(res, 200, true, 'User found', user);
};

export const checkTokenBlacklist = async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) return sendError(res, 400, 'Token is required');

  try {
    const blacklisted = await prisma.blacklistedToken.findUnique({
      where: { token },
    });

    return sendResponse(res, 200, true, 'Token check complete', { isBlacklisted: !!blacklisted });
  } catch (error) {
    return sendError(res, 500, 'Error checking token blacklist');
  }
};

export const deleteUserInternal = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await userService.deleteUser(id);
    return sendResponse(res, 200, true, 'User deleted successfully');
  } catch (error: any) {
    if (error.code === 'P2025') return sendError(res, 404, 'User not found');
    return sendError(res, 500, 'Error deleting user: ' + error.message);
  }
};

export const bulkDeleteUsersInternal = async (req: Request, res: Response) => {
  const { userIds } = req.body;
  if (!Array.isArray(userIds)) return sendError(res, 400, 'userIds must be an array');

  try {
    await userService.bulkDeleteUsers(userIds);
    return sendResponse(res, 200, true, 'Users deleted successfully');
  } catch (error: any) {
    return sendError(res, 500, 'Error deleting users: ' + error.message);
  }
};
