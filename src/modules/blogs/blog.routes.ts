import express from 'express';
import { blogController } from './blog.controller';
import auth from '../../middleware/authenticat';
import validateMiddleware from '../../middleware/validateRequest';
import { blogValidation } from './blog.validation';

const router = express.Router();
router.post(
  '/blogs',
  auth('user'),
  validateMiddleware(blogValidation.blogValidationSchema),
  blogController.createBlog,
);
router.patch('/blogs/:id', auth('user'), blogController.updatedBlog);
router.delete('/blogs/:id', auth('user'), blogController.deleteBlog);
router.get('/blogs', blogController.getAllBolgs);

export const blogRoutes = router;
