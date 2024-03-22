import { z } from "zod";
import { Z_Appointment } from "./zod";

export type T_Appointment = z.infer<typeof Z_Appointment>;
