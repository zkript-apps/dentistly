import { z } from "zod";

export const Z_Procedure = z.object({
	procedureName: z.string(),
	description: z.string(),
	UpdatedAt: z.string().optional(),
	deletedAt: z.date().optional(),
});
