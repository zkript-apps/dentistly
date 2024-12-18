import { z } from "zod";
import { Z_MemberRegister, Z_User, Z_UserRegister } from "./zod";

export type T_User = z.infer<typeof Z_User>;
export type T_UserRegister = z.infer<typeof Z_UserRegister>;
export type T_MemberRegister = z.infer<typeof Z_MemberRegister>;
