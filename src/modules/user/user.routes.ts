import express from 'express';
import { userController } from './user.controller';
import auth from '../../middleware/authenticat';
const router = express.Router();
router.post('/create-admin', userController.createAdmin);
router.get('/', auth('admin'), userController.getAll);
export const userRotes = router;
