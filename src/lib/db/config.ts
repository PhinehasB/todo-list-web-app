import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
// import * as schema from "./schema";

// export function createDbConnection(databaseUrl: string) {
//     const sql = neon(databaseUrl);
//   return drizzle({ client: sql, schema });
// }
const databaseUrl = process.env.DATABASE_URL!;
if (!databaseUrl) {
  throw new Error("DATABASE URL env variable is not set");
}
const sql = neon(databaseUrl);
export const db = drizzle({ client: sql });

// export function db() {
// return createDbConnection(databaseUrl);
// }
