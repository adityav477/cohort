import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import userRouter from './routes/user'
import blogRouter from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
}>()

app.use("/*", cors());
app.route("/api/v1/user/", userRouter);
app.route("/api/v1/blog/", blogRouter);

//mddleware for jwt authentication


// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })
//
// app.post("/api/v1/user/signup", async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//
//   const body = await c.req.json();
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: body.email,
//         password: body.password
//       }
//     })
//
//     if (!user) {
//       const newUser = await prisma.user.create({
//         data: {
//           email: body.email,
//           name: body.name,
//           password: body.password
//         }
//       })
//       console.log(newUser);
//
//       const token = await sign({ id: newUser.id }, c.env.JWT_SECRET);
//
//       return c.json({
//         jwt: token,
//       })
//
//     }
//   } catch (error) {
//     console.log(error);
//   }
// })
//
// app.post("/api/v1/user/signin", async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//
//   const body = await c.req.json();
//
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: body.email,
//       }
//     })
//
//     if (user) {
//       const token = await sign({ id: user.id }, c.env.JWT_SECRET);
//       return c.json({
//         jwt: token
//       })
//     } else {
//       c.status(404);
//       c.json({
//         error: "User not found",
//       })
//     }
//   } catch (error) {
//     console.log(error);
//   }
// })
//
// app.post("/api/v1/blog/", (c) => {
//   console.log("user id is " + c.get("userId"));
//
//   return c.json({
//     message: "Authentication works fine ",
//     userId: c.get("userId")
//   })
// })
//
export default app
