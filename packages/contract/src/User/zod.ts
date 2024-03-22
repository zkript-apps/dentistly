import { z } from "zod";

export const Z_User = z.object({
	id: z.string(),
	username: z.string(),
	email: z.string(),
	role: z.string(),
	password: z.string(),
	createdAt: z.string().optional(),
	updatedAt: z.string().optional(),
	deletedAt: z.string().optional(),
	registrationType: z.string().optional(),
});
