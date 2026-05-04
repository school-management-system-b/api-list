import { Router } from 'express';
import * as internalController from '../controllers/notification-internal.controller';
import { internalAuth } from '@microservices/common/middlewares/internal.auth';

const router = Router();

// Apply internal authentication to all internal endpoints
router.use(internalAuth);

// Internal/System Triggers (Service-to-Service)
router.post('/', internalController.triggerNotification);
router.post('/batch', internalController.triggerBatchNotification);
router.post('/urgent', internalController.triggerUrgentAlert);
router.post('/welcome', internalController.sendWelcomeEmail);

export default router;
