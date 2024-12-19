import { z } from 'zod';
const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required',
    }),
    isPublished: z.boolean().optional(),
  }),
});
export const loginValidation = {
  loginValidationSchema,
};
