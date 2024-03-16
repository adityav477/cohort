import prisma from "@/db"

export default async function signupFunction(email: string, name: string, password: string) {
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: password,
      }
    })

    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return error;
  }

}
