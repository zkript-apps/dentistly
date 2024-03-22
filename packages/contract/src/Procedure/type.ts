import { z } from "zod";
import { Z_Procedure } from "./zod";

export type T_Procedure = z.infer<typeof Z_Procedure>;
