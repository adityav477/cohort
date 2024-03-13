import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@adimanav/common/build/zod/user";

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid Inputs" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })
    // console.log("from try");

    if (!user) {
      const newUser = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: body.password,
        }
      })

      const token = await sign(newUser.id, c.env.JWT_SECRET);

      return c.json({
        jwt: token,
      })
    } else {
      c.status(412);
      return c.json({ message: "User already exits" })
    }
  } catch (error) {
    c.status(412);
    return c.json({ message: "User aslready exits" })
  }
})

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid inputs" })
  }
  try {

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })

    //@ts-ignore
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token,
      // @ts-ignore
      name: user.name, //this is the send the name of the user for appbar profile button
    })
  } catch (error) {
    c.status(412);
    return c.json({ message: "User doesn't exits" })
  }
})

export default userRouter;
