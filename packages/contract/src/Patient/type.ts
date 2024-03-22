import { z } from "zod";
import { Z_Operations } from "../Operations/zod";

export type T_Operations = z.infer<typeof Z_Operations>;
