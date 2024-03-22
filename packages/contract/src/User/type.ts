import { z } from "zod";
import { Z_User } from "./zod";

export type T_User = z.infer<typeof Z_User>;
