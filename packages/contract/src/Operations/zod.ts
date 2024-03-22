import { z } from "zod";

export const Z_Operations = z.object({
	operationName: z.string(),
	actions: z.enum(["Create", "Read", "Update", "Delete"]),
	createdAt: z.string().optional(),
	UpdatedAt: z.string().optional(),
	deletedAt: z.date().optional(),
});
