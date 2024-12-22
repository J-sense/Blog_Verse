import express from 'express';
import { adminContrller } from './admin.controller';
import auth from '../../middleware/authenticat';

const router = express.Router();
router.patch(
  '/users/:id/block',
  auth('admin'),
  adminContrller.findeUserForblock,
);
router.delete('/blogs/:id', auth('admin'), adminContrller.deleteUser);
export const adminRoutes = router;
