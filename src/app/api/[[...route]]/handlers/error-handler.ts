import { Context } from "hono";

export const handleError = (
  c: Context,
  error: unknown,
  message = "Internal server error"
) => {
  console.error(`${message}:`, error);
  return c.json({ error: message }, 500);
};

export const handleNotFound = (c: Context, resource = "Resource") => {
  return c.json({ error: `${resource} not found` }, 404);
};

export const handleValidationError = (
  c: Context,
  message = "Validation failed"
) => {
  return c.json({ error: message }, 400);
};
