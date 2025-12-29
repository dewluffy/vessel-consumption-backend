import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    name: z.string().min(2),
    role: z.enum(["EMPLOYEE", "SUPERVISOR", "MANAGER", "ADMIN"]),
    password: z.string().min(6),
  }),
});
