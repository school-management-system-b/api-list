import { Router } from 'express';
import * as categoryController from '../controllers/category.controller';
import { internalAuth } from '@microservices/common/middlewares/internal.auth';

const router = Router();

// Internal/System endpoints (Service-to-Service)
router.use(internalAuth);

router.get('/categories/:id', categoryController.getCategoryById);

export default router;
