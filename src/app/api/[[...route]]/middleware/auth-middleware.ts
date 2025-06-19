import { auth } from "@/lib/auth";
import { Context, Next } from "hono";
import { headers } from "next/headers";

export const requireAuth = async function (c: Context, next: Next) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return c.json(
        {
          error: "Authentication is required",
        },
        401
      );
    }
    c.set("user", session.user);
    await next();
  } catch (error) {
    console.error("Auth middleware error", error);
    return c.json(
      {
        error: "Authentication faild",
      },
      401
    );
  }
};
