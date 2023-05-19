import { z } from "zod";

const jobBoardSchema = z.object({
  name: z
    .string()
    .min(2, "Board name must be at least 2 characters long")
    .max(50, "Board name field must be 50 characters or less")
    .refine((value) => value.trim() !== "", {
      message: "Board name is required",
    }),
});

export default jobBoardSchema;