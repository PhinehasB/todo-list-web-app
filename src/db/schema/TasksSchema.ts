import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const priorityEnum = pgEnum("priority", ["Extreme", "Moderate", "Low"]);
export const statusEnum = pgEnum("status", [
  "Completed",
  "In progress",
  "Not started",
]);

export const tasksTable = pgTable("tasks", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  priority: priorityEnum("priority").default("Low"),
  status: statusEnum("status").default("Not started"),
  description: text("description"),
  vital: boolean().default(false),
  thumbnail: varchar(),
  createdAt: timestamp("createdAt").defaultNow(),
});
