import { z } from "zod";

export const createFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
});
