import { Router } from 'express';
import * as classController from '../controllers/class.controller';
// import { authMiddleware } from '../middlewares/auth.middleware'; // If available

const router = Router();

// Public/Auth routes via Gateway
router.get('/', classController.getClasses);
router.get('/:id', classController.getClassById);
router.post('/', classController.createClass);
router.put('/:id', classController.updateClass);
router.delete('/:id', classController.deleteClass);

export default router;
