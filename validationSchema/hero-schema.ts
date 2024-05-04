import { z } from "zod";

export const heroSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  description: z.string().min(1, "Blog description is required").max(5000),
  creator: z.string().min(1, "Creator is required"),
  creator_email: z.string().optional(),
  image: z.optional(z.string()),
});
