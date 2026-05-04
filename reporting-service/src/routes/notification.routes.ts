import { Router } from 'express';
import * as notificationController from '../controllers/notification.controller';
import * as templateController from '../controllers/notification-template.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { roleCheck } from '@microservices/common/middlewares/auth.check';

const router = Router();

// Internal routes moved to internal.routes.ts

// User Notification Center
router.get('/my', authenticate, notificationController.getMyNotifications);
router.post('/mark-read', authenticate, notificationController.markAsRead);
router.get('/unread-count', authenticate, notificationController.getUnreadCount);

// Templates
router.get('/templates', authenticate, templateController.getTemplates);
router.post('/templates', authenticate, roleCheck(['SUPERADMIN', 'ADMIN']), templateController.createTemplate);
router.put('/templates/:id', authenticate, roleCheck(['SUPERADMIN', 'ADMIN']), templateController.updateTemplate);

export default router;
