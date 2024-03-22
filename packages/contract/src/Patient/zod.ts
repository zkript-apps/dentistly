import { z } from "zod";

export const Z_ContactInfo = z.object({
	name: z.string(),
	contactNumber: z.string(),
	relationship: z.string(),
});

export const Z_Patient = z.object({
	lastName: z.string(),
	firstName: z.string(),
	middleName: z.string(),
	DoB: z.date(),
	age: z.number(),
	gender: z.string(),
	address: z.string(),
	status: z.enum(["Married", "Single", "Divorced"]),
	relativesContactInfo: Z_ContactInfo,
	createdAt: z.string().optional(),
	UpdatedAt: z.string().optional(),
	deletedAt: z.date().optional(),
});
