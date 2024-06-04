import { NextResponse } from "next/server";
import prisma from "database";


export const GET = async () => {
  const response = await prisma.user.create({
    data: {
      email: "e2@gmail.com",
      name: "example2",
    }
  })

  return NextResponse.json({
    response,
  })
}
