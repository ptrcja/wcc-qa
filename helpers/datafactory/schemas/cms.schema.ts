import { z } from "zod";
import { profileStatusSchema } from "./mentor.schema";

/**
 * Lightweight shape for items in the public CMS mentors list.
 * Validates only the fields the mentorship flow relies on; the extra
 * keys returned by the CMS page payload are stripped, not rejected.
 */
export const cmsMentorSchema = z.object({
	id: z.number(),
	email: z.email(),
	fullName: z.string(),
	profileStatus: profileStatusSchema,
});

/** The public CMS mentors page wraps the mentor list under `mentors`. */
export const cmsMentorsPageSchema = z.object({
	mentors: z.array(cmsMentorSchema),
});

export type CmsMentor = z.infer<typeof cmsMentorSchema>;
export type CmsMentorsPage = z.infer<typeof cmsMentorsPageSchema>;
