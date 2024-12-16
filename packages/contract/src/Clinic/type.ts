import z from "zod";
import { Z_ClinicRegister } from "./zod";

export type T_ClinicRegister = z.infer<typeof Z_ClinicRegister>;