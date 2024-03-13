import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { verify } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogInput } from "@adimanav/common/build/zod/blog"

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: {
    userId: string
  }
}>()

//middleware
blogRouter.use("*", async (c, next) => {
  try {
    const jwt = c.req.header("Authorization") || "";
    // console.log(jwt);
    const token: string = jwt.split(" ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    // console.log(payload);

    if (payload.id) {
      c.set("userId", payload.id)
      // console.log("inside if payload wala");
    }
    await next();

  } catch (error) {
    c.status(404);
    return c.json({ error: "Invalid token login or signup" })
  }
})


blogRouter.get("/", (c) => {
  return c.json({
    message: "From blogRouter.get"
  })
})

//create blog
blogRouter.post("/post", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const id = c.get("userId");
  // console.log(id);

  const body = await c.req.json();
  const { success } = blogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ message: "Wrong blog inputs" })
  } else {

    const newPost = await prisma.post.create({
      //@ts-ignore
      data: {
        title: body.title,
        description: body.description,
        authorId: id,
      }
    })

    // console.log(newPost);
    return c.json({
      message: "Post created successfully",
      post: newPost,
    })

  }

})

blogRouter.post("/update", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const authorId = c.get("userId");

  const body = await c.req.json();

  const { success } = blogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ message: "Wrong blog inputs" })
  }

  const updateUser = await prisma.post.update({
    where: {
      id: body.id,
      authorId: authorId,
    },
    data: {
      title: body.title,
      description: body.description
    }
  })
  // console.log("updated user is " + updateUser);

  return c.json({
    message: "Post updated Successfully",
  })
})


blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      //@ts-ignore
      date: true,
      author: true,
    }
  });
  // console.log("the posts are " + posts);

  return c.json(posts);
})

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  // console.log(id);

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        // @ts-ignore
        date: true,
        author: true,
      }
    })

    return c.json({
      post: post,
    })
  } catch (error) {
    c.status(404);
    return c.json({
      error: "Id not found"
    })
  }
})

blogRouter.get("/delete/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  })

  const id = c.req.param("id");
  const userId = c.get("userId");
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        authorId: true,
      }
    })

    if (!post) {
      console.log("post with id doesn't exists");
      c.status(411);
      return c.json({ message: `Post with id: ${id} not found` });

    } else if (post.authorId != userId) { // so no one else can delete any one elses post
      console.log("You are not the author of the psot")
      c.status(405);
      return c.json({ message: "You are not the author" })

    } else {
      const deletedPost = await prisma.post.delete({
        where: {
          id: id,
        }
      })
      if (deletedPost) {
        return c.json({ message: "Post Deleted Successfully" });
      }
    }
  } catch (error) {
    console.log("error while deleting post " + error);
    c.status(404);
    return c.json({ message: "Errow while deleting post" })
  }
})
export default blogRouter;
