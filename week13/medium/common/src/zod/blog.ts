import zod from "zod";

export const blogInput = zod.object({
  title: zod.string(),
  description: zod.string(),
})

export type BlogInput = zod.infer<typeof blogInput>
