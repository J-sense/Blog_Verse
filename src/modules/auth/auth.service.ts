import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const register = async (payload: TUser) => {
  const isEmailExist = await User.findOne({ email: payload.email });
  if (isEmailExist) {
    throw new Error('this user is already exists');
  } else {
    const result = await User.create(payload);
    return result;
  }
};

export const authService = {
  register,
};
