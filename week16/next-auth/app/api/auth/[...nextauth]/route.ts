import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";


const handler = NextAuth(NEXT_AUTH);
export const GET = handler;
export const POST = handler;

// to access all the cath and params in nextjs without auth such that all the request coming to /api/auth/.. will be here
// the nextauth is an arary of strings that contains all the paths 
// import { NextRequest, NextResponse } from "next/server";
//
// export function GET(req: NextRequest, { params }: { params: string[] }) {
//   console.log(params);
//   return NextResponse.json({
//     message: "inside get function "
// }
//   })
