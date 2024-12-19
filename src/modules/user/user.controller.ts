import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.createAdmin(req.body);
    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getAll();
    res.status(201).json({
      success: true,
      message: 'Get all Users successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createAdmin,
  getAll,
};
