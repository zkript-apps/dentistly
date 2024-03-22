import { z } from "zod";

export const Z_DayOffs = z.object({
	id: z.string(),
	day: z.string(),
	timeRange: z.string(),
});

export const Z_Clinic = z.object({
	id: z.string(),
	clinicName: z.string(),
	address: z.string(),
	dayOff: Z_DayOffs,
	createdAt: z.string().optional(),
	updatedAt: z.string().optional(),
	deletedAt: z.string().optional(),
});
