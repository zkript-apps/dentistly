import { z } from "zod";
import { Z_Checkup } from "./zod";

export type T_Checkup = z.infer<typeof Z_Checkup>;
