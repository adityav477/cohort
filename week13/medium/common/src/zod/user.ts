import zod from "zod";

export const signupInput = zod.object({
  email: zod.string().email(),
  name: zod.string(),
  password: zod.string().min(6),
})

export const signinInput = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
})

export type SignupInput = zod.infer<typeof signupInput>;
export type SigninInput = zod.infer<typeof signinInput>;
