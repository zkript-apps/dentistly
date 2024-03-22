import { z } from "zod";

export const Z_Checkup = z.object({
	id: z.string(),
	cost: z.number(),
	paymentStatus: z.enum(["Unpaid", "Paid", "Partially Paid"]),
	findings: z.string(),
	createdAt: z.string().optional(),
	UpdatedAt: z.string().optional(),
	deletedAt: z.date().optional(),
});
