import { Types } from 'mongoose';

export type TBlog = {
  title: string;
  content: string;
  isPublished?: boolean;
  author: Types.ObjectId;
};
