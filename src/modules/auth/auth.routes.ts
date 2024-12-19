import express from 'express';
import { authController } from './auth.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { userValidation } from '../user/user.validation';
import { loginValidation } from './auth.validation';
const router = express.Router();
router.post(
  '/register',
  validateMiddleware(userValidation.userValidationSchema),
  authController.register,
);
router.post(
  '/login',
  validateMiddleware(loginValidation.loginValidationSchema),
  authController.login,
);
export const authRoutes = router;
