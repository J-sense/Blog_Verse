import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../utilis/catchAsync';
import { User } from '../modules/user/user.model';

const auth = (...requiredRoles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authToken = `Bearer ${req.headers.authorization}`;

    const token = authToken.split(' ')[1];
    // const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new Error('You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(token, 'secret') as JwtPayload;
    console.log(decoded);
    const { role, email } = decoded;

    // checking if the user is exist
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('This user is not found !');
    }
    const userStatus = user?.isBlocked;

    if (userStatus) {
      throw new Error('This user is blocked ! !');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new Error('You are not authorized');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
