import { Router } from 'express';
import * as studentController from '../controllers/student.controller';
import * as consolidatedController from '../controllers/consolidated.controller';

const router = Router();

router.get('/my-profile', studentController.getMyProfile);
router.get('/', studentController.getStudents);
router.post('/bulk', studentController.bulkCreateStudents);
router.post('/internal/link-parent', studentController.linkParentByNis);
router.post('/internal/assign-wali-kelas', studentController.assignWaliKelas);
router.get('/:id', studentController.getStudentById);

router.get('/consolidated/my-child', studentController.getConsolidatedMyChild);
router.get('/:id/consolidated', consolidatedController.getConsolidatedProfile);

router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);


export default router;
