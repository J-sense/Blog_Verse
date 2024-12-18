import express from 'express';
import { authController } from './auth.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { userValidation } from '../user/user.validation';
const router = express.Router();
router.post(
  '/register',
  validateMiddleware(userValidation.userValidationSchema),
  authController.register,
);
export const authRoutes = router;
