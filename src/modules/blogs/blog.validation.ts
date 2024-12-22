import { z } from 'zod';
const blogValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
    // author: z.string({
    //   required_error:
    //     'please sir add a author field. And provide a valid author id  in author field',
    // }),
    isPublished: z.boolean().optional(),
  }),
});
export const blogValidation = {
  blogValidationSchema,
};
