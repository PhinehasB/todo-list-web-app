import { auth } from "@/lib/auth";
import { Hono } from "hono";
// import { zValidator } from "@hono/zod-validator";
// import { userAuthSchemaValidator } from "@/lib/db/schema/validators/userSchemaValidator";

// Create auth routes using Better Auth
const app = new Hono();

// Mount all Better Auth routes
// use the endpoint "/sign-up/email" for email and other auth methods respectively
app.all("/*", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET"], "/sign-up", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET"], "/sign-out", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET"], "/callback/*", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET"], "/session", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET"], "/verify-email", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET"], "/reset-password", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET"], "/change-password", (c) => auth.handler(c.req.raw));

// Custom auth endpoints

// app.post(
//   "/sign-in",
//   zValidator("json", userAuthSchemaValidator),
//   async (c: Context) => {
//     try {
//       const payload = await c.req.json();
//       const response = await auth.api.signInEmail({
//         body: {
//           ...payload,
//         },
//         asResponse: true, // returns a response object instead of data
//       });
//       console.log(payload, response);
//       return c.json({
//         message: "an error occured",
//         data: payload,
//         response: response,
//       });
//     } catch (error) {
//       console.log(error);
//       return c.json({
//         message: "an error occured",
//         error,
//       });
//     }
//   }
// );

app.get("/me", async (c) => {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    return c.json({ error: "Not authenticated" }, 401);
  }

  return c.json({
    user: session.user,
    session: session.session,
  });
});

export { app as AuthRoutes };
