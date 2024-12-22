import express from 'express';
import { userController } from './user.controller';
import auth from '../../middleware/authenticat';
import { userValidation } from './user.validation';
import validateMiddleware from '../../middleware/validateRequest';
const router = express.Router();
router.post(
  '/create-admin',
  validateMiddleware(userValidation.userValidationSchema),
  userController.createAdmin,
);
router.get('/', auth('admin'), userController.getAll);
export const userRotes = router;
