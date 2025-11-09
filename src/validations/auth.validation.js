import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(5).max(255).trim(),
  email: z.string().email().max(255).toLowerCase().trim(),
  password: z.string().min(8).max(1024),
  role: z.enum(['user', 'admin']).default('user'),
});

export const signInSchema = z.object({
  email: z.string().email().max(255).toLowerCase().trim(),
  password: z.string().min(1).max(1024),
});
