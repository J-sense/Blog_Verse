import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDb = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  const populateResult = await result.populate('author');
  return populateResult;
};
const updateBlog = async (
  blogId: string,
  updatedData: Partial<TBlog>,
  userId: string,
) => {
  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new Error('Blog not found');
  }
  if (blog.author.toString() !== userId) {
    throw new Error('You are not authorized to update this blog');
  }
  const result = await Blog.findByIdAndUpdate(
    blogId,
    { $set: updatedData },
    { new: true }, // Return the updated document
  ).populate('author');

  return result;
};
const deleteBlog = async (blogId: string, userId: string) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new Error('Blog Not found');
  }
  if (blog.author.toString() !== userId) {
    throw new Error('You are not authorized to update this blog');
  }
  const deleteBlog = await Blog.findByIdAndDelete(blog);
  return deleteBlog;
};
const getAllBlogs = async (query: Record<string, unknown>) => {
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const result = await Blog.find({
    $or: ['title'].map((fields) => ({
      [fields]: { $regex: searchTerm, $options: 'i' },
    })),
  });
  return result;
};
export const blogService = {
  createBlogIntoDb,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
