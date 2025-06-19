import { Hono } from "hono";
import { db } from "../../../../lib/db/config";
import { tasksTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { requireAuth } from "../middleware/auth-middleware";
import { handleCreateTodo } from "../handlers/TaskHandler";

const Tasks = new Hono();
// eslint-disable-next-line react-hooks/rules-of-hooks
Tasks.use("/*", requireAuth);

Tasks.post("/", requireAuth, handleCreateTodo);

Tasks.get("/", async (c) => {
  // const seedTasks = {
  //   title: "Sample Task",
  //   description: "This is a sample task description",
  //   thumbnail: "https://example.com/thumbnail.jpg",
  // };

  // await db.insert(tasksTable).values(seedTasks);
  const res = await db.select().from(tasksTable);
  return c.json({ res });
});

Tasks.get("/:name", (c) => {
  return c.text(`${c.req.param("name")} is hit`);
});

Tasks.delete("/:id", async (c) => {
  const id = c.req.param("id");
  console.log(id);
  const res = await db
    .delete(tasksTable)
    .where(eq(tasksTable.id, id))
    .returning();
  console.log(res);
  return c.json(res);
});

export { Tasks as TaskRoutes };
