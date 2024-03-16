
'use client'
import { useRouter } from "next/navigation";

export default function SigninComponent() {
  const router = useRouter();

  const handleClick = () => {
  }


  return (<div className="flex justify-center items-center h-screen ">
    <div className="flex flex-col justify-center items-center max-w-screen-sm w-full h-screen gap-4">
      {/* for signup header */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl font-bold">
          Signin
        </div>
        <div className="flex justify-center text-md gap-1 my-4">
          <div>
            Don't have an account?
          </div>
          <div onClick={() => {
            router.push("/signup");
          }} className="underline">
            Signup
          </div>
        </div>
      </div>

      {/* input areas */}
      <div className="flex flex-col gap-4 w-2/5">
        <InputArea label="Email" placeholder="Enter your Name" type="email" />
        <InputArea label="Password" placeholder="Enter your Password" type="password" />
      </div>
      <div className="mt-4 w-2/5">
        <button className="bg-slate-500 text-white hover:text-white hover:bg-slate-800 px-4 py-2 w-full rounded-lg">Signin</button>
      </div>
    </div>
  </div>)
}

function InputArea({ label, placeholder, type }: { label: string, placeholder: string, type: string }) {
  return (<div >
    <div className="flex flex-col justify-center gap-2">
      <label className="text-lg font-semibold">{label}</label>
      <input name={label} placeholder={placeholder} type={type} className="rounded-md py-1 px-2 border border-black" />
    </div>
  </div>)
}
