import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function inserUser(email: string, firstName: string, lastName: string, password: string) {
  const result = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password
    }
  })
  console.log(result);
}

//update query 
interface UpdateParams {
  firstName: string,
  lastName: string,
}

async function updateUser(email: string, { firstName, lastName }: { firstName: string, lastName: string }) {
  const result = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      firstName,
      lastName
    }
  })
  console.log(result);
}

// inserUser("example1@gmail.com", "example1", "example1", "example1");
updateUser("example1@gmail.com", {
  firstName: "e1firstName",
  lastName: "e1lastName",
})



