import express from 'express';
import { blogController } from './blog.controller';
import auth from '../../middleware/authenticat';

const router = express.Router();
router.post('/blogs', auth('user'), blogController.createBlog);
router.patch('/blogs/:id', auth('user'), blogController.updatedBlog);

export const blogRoutes = router;
