import { Router } from 'express';
import * as internalController from '../controllers/internal.controller';
import * as notificationController from '../controllers/notification.controller';
import * as templateController from '../controllers/template.controller';

const router = Router();

// Internal routes moved to internal.routes.ts

// User Notification Center
router.get('/my', notificationController.getMyNotifications);
router.post('/mark-read', notificationController.markAsRead);
router.get('/unread-count', notificationController.getUnreadCount);

// Templates
router.get('/templates', templateController.getTemplates);
router.post('/templates', templateController.createTemplate);
router.put('/templates/:id', templateController.updateTemplate);

export default router;
