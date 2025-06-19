import { db } from "@/lib/db/config";
import { tasksTable } from "@/lib/db/schema";
import { Context } from "hono";
import { handleError } from "./error-handler";

export const handleCreateTodo = async function (c: Context) {
  try {
    const user = c.get("user");
    const payload = await c.req.json();
    console.log(user, payload);
    const newPayload = {
      userId: user.id,
      ...payload,
    };
    const newTodo = await db.insert(tasksTable).values(newPayload).returning();
    return c.json(newTodo);
  } catch (error) {
    return handleError(c, error, "Failed to create Todo");
  }
};
