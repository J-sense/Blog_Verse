import { NextFunction, Request, Response } from 'express';
import { blogService } from './blog.service';

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Ensure the logged-in user ID is available
    const loggedUser = req.user?.userId;
    if (!loggedUser) {
      res.status(401).json({
        success: false,
        message: 'You must be logged in to create a blog',
      });
    }
    const { title, content } = req.body;
    // Create a new blog
    const newBlog = await blogService.createBlogIntoDb({
      title,
      content,
      author: loggedUser, // Use the logged-in user's ID as the author
    });
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: newBlog,
    });
  } catch (error) {
    next(error);
  }
};

const updatedBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(payload);
    // // console.log(req.params.id);
    // // console.log(req.user?.userId);

    // if (req.user?.userId !== req.params.id) {
    //   throw new Error('You are not logged in');
    // }

    const blogId = req.params.id; // Blog ID from URL
    const { title, content } = req.body; // Blog data from request body
    const loggedUser = req.user?.userId;
    if (!loggedUser) {
      res.status(401).json({
        success: false,
        message: 'You must be logged in to update a blog',
      });
    }
    const updatedBlog = await blogService.updateBlog(
      blogId,
      { title, content },
      loggedUser,
    ); // User ID from authenticated token
    res.status(201).json({
      success: true,
      message: 'Blog updated successfully',
      data: updatedBlog,
    });
  } catch (error) {
    next(error);
  }
};
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogId = req.params.id;
    const loggedUser = req.user?.userId;

    if (!loggedUser) {
      res.status(401).json({
        success: false,
        message: 'You must be logged in to delete a blog',
      });
    }

    const isDeleted = await blogService.deleteBlog(blogId, loggedUser);

    if (!isDeleted) {
      res.status(404).json({
        success: false,
        message: 'Blog not found or you are not authorized to delete it',
      });
    }

    res.status(200).json({
      message: 'Blog deleted successfully',
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
const getAllBolgs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogService.getAllBlogs(req.query);
    res.status(201).json({
      success: true,
      message: 'All blogs rettreive successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const blogController = {
  createBlog,
  updatedBlog,
  deleteBlog,
  getAllBolgs,
};
