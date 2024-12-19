import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../../config';

const register = async (payload: TUser) => {
  const isEmailExist = await User.findOne({ email: payload.email });
  if (isEmailExist) {
    throw new Error('this user is already exists');
  } else {
    const result = await User.create(payload);
    return result;
  }
};
const login = async (payload: TLogin) => {
  const userExist = await User.findOne({ email: payload.email });
  if (!userExist) {
    throw new Error('User not exist');
  }
  const validUser = await bcrypt.compare(payload.password, userExist.password);
  if (!validUser) {
    throw new Error("Password didn't matched");
  }
  const token = jwt.sign(
    { email: userExist.email, role: userExist.role },
    config.default_password as string,
    { expiresIn: '7d' },
  );
  return { token, userExist };
};

export const authService = {
  register,
  login,
};
