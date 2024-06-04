"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export function Appbar() {
  const session = useSession();
  console.log(session);

  return (
    <div className="flex justify-between items-center p-2 m-2">
      <div className="text-3xl font-bold">
        Logo
      </div>
      <div className="flex justify-between gap-4">
        <button onClick={() => {
          signIn();
        }} className="bg-gray-400 rounded-lg p-2">SignIn</button>

        <button onClick={() => {
          signOut();
        }} className="bg-gray-400 rounded-lg p-2">Logout</button>
      </div>
      <div>
        {JSON.stringify(session)}
      </div>
    </div>
  )
}
