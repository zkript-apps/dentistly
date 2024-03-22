import { z } from "zod";
import { E_UserRole } from "./enum";

export const Z_Session = z.object({
	id: z.number().nullable().optional(),
	email: z.string().nullable(),
	registrationType: z.string().nullable(),
	deletedAt: z.string().nullable(),
	changePasswordAt: z.string().nullable(),
	role: z.nativeEnum(E_UserRole),
});
