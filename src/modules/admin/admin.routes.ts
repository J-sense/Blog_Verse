import express from 'express';
import { adminContrller } from './admin.controller';
import auth from '../../middleware/authenticat';

const router = express.Router();
router.patch(
  '/:id/block/users',
  auth('admin'),
  adminContrller.findeUserForblock,
);
router.delete('/blogs/:id', auth('admin'), adminContrller.deleteUser);
export const adminRoutes = router;
