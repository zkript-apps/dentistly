import { z } from "zod";

// Define the schema for dayOffs
export const Z_dayOffs = z.object({
  day: z.string(),
  fromTime: z.string(),
  toTime: z.string(),
});


// Define the schema for clinic
export const Z_ClinicRegister = z.object({
  clinicName: z.string(),
  address: z.string().optional(),
  dayOffs: z.array(Z_dayOffs),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
});

