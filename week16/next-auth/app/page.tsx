"use client"
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex justify-center items-center h-screen gap-10">
      <button onClick={() => {
        signIn();
      }} className="bg-gray-500 p-2 rounded-lg">Signup</button>
      <br />
      <button onClick={() => {
        signOut();
      }} className="bg-gray-500 p-2 rounded-lg">LogOut</button>
    </div>
  );
}
