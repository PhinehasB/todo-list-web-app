import { Hono } from "hono";

const auth = new Hono();

auth.get("/sign-in", (c) => {
  return c.json({
    message: "sign in route",
  });
});

export { auth as AuthRoutes };
