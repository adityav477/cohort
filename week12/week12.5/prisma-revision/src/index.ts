import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
  try {
    // const response = await prisma.user.create({
    //   data: {
    //     username,
    //     password,
    //     firstName,
    //     lastName,
    //     email,
    //   }
    // })
    const response = await prisma.todo.create({
      data: {
        title: "title",
        description: "description",
        userId: 1,
      }
    })
    console.log(response);

  } catch (error) {
    console.log(`there was ${error}`)

  }
}

async function getTodoAndUsers(userId: number) {
  try {
    const response = await prisma.todo.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        author: true,

      }
    })
    console.log(response)
  } catch (error) {
    console.log(`${error} occured `)
  }
}
// insertUser("username1", "username1", "username1", "username1", "u1@gmail.com");
getTodoAndUsers(1)
