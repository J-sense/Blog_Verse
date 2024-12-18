import { z } from 'zod';
const blogValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
    isPublished: z.boolean().optional(),
  }),
});
export const blogValidation = {
  blogValidationSchema,
};
