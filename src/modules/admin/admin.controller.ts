import { NextFunction, Request, Response } from 'express';
import { adminService } from './admin.service';

const findeUserForblock = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await adminService.findUserforblock(req.params.id);
    if (!result) {
      throw new Error('User not found');
    }
    res.status(201).json({
      message: 'User blocked successfully',
      success: true,
      statusCode: 201,
    });
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await adminService.deleUser(req.params.id);
    res.status(201).json({
      message: 'User deleted successfully',
      success: true,
      statusCode: 201,
    });
    if (!result) {
      throw new Error('User not found');
    }
  } catch (error) {
    next(error);
  }
};
export const adminContrller = {
  findeUserForblock,
  deleteUser,
};
