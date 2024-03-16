import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/db";

const client = prisma;

export async function POST(req: NextRequest) {
  console.log("inside api/signup");

  const body = await req.json();
  try {
    const user = await client.user.create({
      data: {
        name: body.name,
        //@ts-ignore
        email: body.email,
        password: body.password,
      }
    })
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
