import * as z from "zod"

export const Z_Login = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type T_Login = z.infer<typeof Z_Login>