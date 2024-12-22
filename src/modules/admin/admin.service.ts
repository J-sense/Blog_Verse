import { Blog } from '../blogs/blog.model';
import { User } from '../user/user.model';

const findUserforblock = async (id: string) => {
  const isExist = await User.findById(id);
  if (!isExist) {
    throw new Error('user not found');
  }
  if (!isExist.isBlocked) {
    const result = await User.findByIdAndUpdate(id, { isBlocked: true });
    return result;
  } else {
    throw new Error('User is already blocked');
  }
};
const deleUser = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
export const adminService = {
  findUserforblock,
  deleUser,
};
