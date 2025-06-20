import { z } from "zod";

// {
//     userId: string;
//     title: string;
//     id?: string | undefined;
//     createdAt?: Date | null | undefined;
//     priority?: "Extreme" | "Moderate" | "Low" | null | undefined;
//     status?: "Completed" | "In progress" | "Not started" | null | undefined;
//     description?: string | ... 1 more ... | undefined;
//     vital?: boolean | ... 1 more ... | undefined;
//     thumbnail?: string | ... 1 more ... | undefined;
// }

export const createTodoSchemaValidator = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title is too long"),
  description: z
    .string()
    .max(1000, "Description is too long: 1000 characters")
    .optional(),
});
