import { z } from "zod";
import { E_RegistrationType, E_UserRole } from "./enum";

export const Z_User = z.object({
  _id: z.string(),
  clinic: z.any(),
  role: z.nativeEnum(E_UserRole),
  email: z.string().email(),
  username: z.string().optional(),
  password: z.string().min(8).optional(),
  registrationType: z.nativeEnum(E_RegistrationType),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
});