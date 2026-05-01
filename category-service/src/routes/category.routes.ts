import { Router } from 'express';
import * as categoryController from '../controllers/category.controller';
import * as configController from '../controllers/config.controller';

const router = Router();

// Categories
router.get('/', categoryController.getCategories);
router.post('/', categoryController.createCategory);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

// Configurations
router.get('/config/points', configController.getPointsConfig);
router.put('/config/points/:key', configController.updatePointsConfig);

// Stats
router.get('/stats/summary', configController.getCategoryStats);

export default router;
