"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function SignIn(){
  const router = useRouter();
  return (
  <div className="flex justify-center bg-black text-white items-center h-screen ">
      <div className="flex flex-col items-center gap-5 border-2 rounded-lg p-10">
        {/* heading */}
        <div className="text-5xl font-bold p-4">
          Signup
        </div>

        {/* inputs */}
        <div className="flex flex-col justify-center items-center gap-2">
          <Label title="Email" />
          <Label title="Password" />
        </div >

         {/* Signin Component */}
          <button onClick={async () => {
          await signIn();
          router.push("/user");
        }} className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-4/5 px-4 py-2 mt-2">Sign In</button>

          <button onClick={async () => {
          await signIn("Google");
          router.push("/user");
        }} className="rounded-xl bg-white text-black w-4/5 px-4 py-2 mt-2">Sign in with <span className="text-red-500">Google</span></button>
      </div>
    </div>
  )

  //iLebel
  function Label({title}: {title: string}){
    return (
    <div className="flex flex-col text-lg gap-4 mb-2">
        {/* @ts-ignore */}
        <label >{title}</label>
      <input className="border-2 rounded-lg px-2 py-1"placeholder="Enter your Email"/>
      </div>
    )
  }
}
