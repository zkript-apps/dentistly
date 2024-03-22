import { z } from "zod";
import { Z_DayOffs, Z_Clinic } from "./zod";

export type T_DayOffs = z.infer<typeof Z_DayOffs>;
export type T_Clinic = z.infer<typeof Z_Clinic>;
