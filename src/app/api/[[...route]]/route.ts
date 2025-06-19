import { Hono } from "hono";
import { handle } from "hono/vercel";
import { AuthRoutes } from "./routes/AuthRoutes";
import { TaskRoutes } from "./routes/TaskRoutes";
// import { auth } from "@/lib/auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.route("/auth", AuthRoutes);
app.route("/tasks", TaskRoutes);

export const GET = handle(app);
export const POST = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
