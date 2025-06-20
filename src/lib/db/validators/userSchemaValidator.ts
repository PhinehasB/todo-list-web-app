import { createInsertSchema } from "drizzle-zod";
import { user } from "../schema/authSchema";
import { z } from "zod/v4";

const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);
export const userAuthSchemaValidator = createInsertSchema(user, {
  email: z.email(),
})
  .omit({
    createdAt: true,
    id: true,
    updatedAt: true,
    name: true,
    image: true,
    emailVerified: true,
  })
  .extend({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100, { message: "Password must be at most 100 characters long" })
      .regex(passwordValidation, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }),
  })
  .required({
    email: true,
    password: true,
  });
