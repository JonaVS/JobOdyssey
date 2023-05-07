/* eslint-disable no-useless-escape */
import { z } from "zod";

const baseSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});

const registerSchema = baseSchema
  .extend({
    displayName: z
      .string()
      .min(2, { message: "Display name must be at least 2 characters long" }),
    password: z
      .string()
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}/,
        "Password must have 8 characters, at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 symbol."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const loginSchema = baseSchema.extend({
  password: z.string().min(1, { message: "Password is required" }),
});

function getValidationSchema(islogin: boolean) {
  return islogin ? loginSchema : registerSchema;
}

export default getValidationSchema;
