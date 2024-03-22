import { z } from "zod";

export const Z_Appointment = z.object({
	id: z.string(),
	lastName: z.string(),
	firstName: z.string(),
	middleName: z.string(),
	email: z.string(),
	contactNumber: z.string(),
	date: z.string(),
	time: z.number(),
	status: z.string(),
	declineReason: z.string(),
	createdAt: z.string().optional(),
	UpdatedAt: z.string().optional(),
	deletedAt: z.date().optional(),
});
