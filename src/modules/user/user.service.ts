import { TUser } from './user.interface';
import { User } from './user.model';

const createAdmin = async (payload: TUser) => {
  if (payload.role == 'admin') {
    const result = await User.create(payload);
    return result;
  }
};
const getAll = async () => {
  const result = await User.find();
  return result;
};
export const userService = {
  createAdmin,
  getAll,
};
