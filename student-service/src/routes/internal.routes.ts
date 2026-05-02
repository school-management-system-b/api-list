import { Router } from 'express';
import * as studentController from '../controllers/student.controller';
import { internalAuth } from '@microservices/common/middlewares/internal.auth';

const router = Router();

// Internal endpoints for inter-service communication
router.get('/students/:id', internalAuth, studentController.getStudentById);
router.post('/students/:id/points', internalAuth, studentController.syncPoints);

export default router;
