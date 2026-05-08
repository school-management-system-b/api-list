import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { internalAuth } from '@microservices/common/middlewares/internal.auth';

const router = Router();

// Endpoint for Auth Service to create a profile automatically
router.post('/users', internalAuth, userController.createUserProfile);

// Endpoint for other services to get or update user info (bypass JWT if using internal secret)
router.get('/users/:id', internalAuth, userController.getUserById);
router.put('/users/:id', internalAuth, userController.updateUserProfile);
router.delete('/users/:id', internalAuth, userController.deleteUserProfile);
router.post('/users/bulk-delete', internalAuth, userController.bulkDeleteUsers);

export default router;
