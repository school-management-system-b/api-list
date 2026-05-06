import { Request, Response } from 'express';
import { sendResponse, sendError } from '../utils/response';
import { createUserSchema, updateUserSchema } from '../validators/user.validator';
import * as userService from '../services/user.service';
import logger from '../config/logger';

interface PrismaError {
  code: string;
}

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Retrieve a list of user profiles
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 25
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search keyword (name, email, username, nip)
 *     responses:
 *       200:
 *         description: List of user profiles retrieved successfully
 */
export const getUsers = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 25;
  const search = req.query.search as string;
  const offset = (page - 1) * limit;

  const { items, total } = await userService.findAll(offset, limit, search);

  return sendResponse(res, 200, true, 'Users retrieved', {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user profile by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID (UUID)
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       404:
 *         description: User profile not found
 */
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.findById(id);

  if (!user) return sendError(res, 404, 'User profile not found');

  return sendResponse(res, 200, true, 'User profile retrieved', user);
};

export const getMyProfile = async (req: Request, res: Response) => {
  const userId = req.headers['x-user-id'] as string;
  if (!userId) return sendError(res, 401, 'Unauthorized: Missing user context');

  const user = await userService.findByUserId(userId);
  if (!user) return sendError(res, 404, 'User profile not found');

  return sendResponse(res, 200, true, 'My profile retrieved', user);
};

export const updateMyProfile = async (req: Request, res: Response) => {
  const userId = req.headers['x-user-id'] as string;
  if (!userId) return sendError(res, 401, 'Unauthorized: Missing user context');

  const { error, value } = updateUserSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const existingProfile = await userService.findByUserId(userId);
  if (!existingProfile) return sendError(res, 404, 'User profile not found');

  try {
    const updated = await userService.update(existingProfile.id, {
      ...value,
      updatedBy: userId,
    });
    return sendResponse(res, 200, true, 'User profile updated', updated);
  } catch (err: any) {
    if (err.code === 'P2002') {
      const target = err.meta?.target || [];
      return sendError(res, 400, `${target.join(', ')} sudah terdaftar.`);
    }
    logger.error('Error in updateMyProfile:', err);
    return sendError(res, 500, err.message || 'Internal Server Error during profile update');
  }
};



/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create a new user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userId, username, email, name]
 *             properties:
 *               userId: { type: string, format: uuid }
 *               username: { type: string }
 *               email: { type: string, format: email }
 *               name: { type: string }
 *               nip: { type: string }
 *               phone: { type: string }
 *     responses:
 *       201:
 *         description: User profile created successfully
 */
export const createUserProfile = async (req: Request, res: Response) => {
  const { error, value } = createUserSchema.validate(req.body);
  if (error) {
    logger.warn(`Validation error in createUserProfile: ${error.details[0].message}`);
    return sendError(res, 400, error.details[0].message);
  }

  try {
    const profile = await userService.create({
      ...value,
      createdBy: req.headers['x-user-id'] as string || 'SYSTEM',
    });

    return sendResponse(res, 201, true, 'User profile created', profile);
  } catch (err: any) {
    logger.error('Error in createUserProfile:', err);
    return sendError(res, 500, err.message || 'Internal Server Error during profile creation');
  }
};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Update an existing user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: User profile updated successfully
 */
export const updateUserProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = updateUserSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  try {
    const updated = await userService.update(id, {
      ...value,
      updatedBy: req.user?.id || 'SYSTEM',
    });
    return sendResponse(res, 200, true, 'User profile updated', updated);
  } catch (err: unknown) {
    if ((err as PrismaError).code === 'P2025') return sendError(res, 404, 'User profile not found');
    throw err;
  }
};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Soft delete a user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User profile deleted successfully
 */
export const deleteUserProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedBy = req.user?.id || 'SYSTEM';

  try {
    await userService.softDelete(id, deletedBy);
    return sendResponse(res, 200, true, 'User profile deleted successfully');
  } catch (err: unknown) {
    if ((err as PrismaError).code === 'P2025') return sendError(res, 404, 'User profile not found');
    throw err;
  }
};

export const bulkDeleteUsers = async (req: Request, res: Response) => {
  const { ids } = req.body;
  if (!Array.isArray(ids)) return sendError(res, 400, 'ids must be an array');

  try {
    await userService.bulkDelete(ids);
    return sendResponse(res, 200, true, `${ids.length} user profiles deleted successfully`);
  } catch (error: any) {
    return sendError(res, 500, 'Error in bulk delete: ' + error.message);
  }
};
