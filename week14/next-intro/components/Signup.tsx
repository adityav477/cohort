'use client'
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import signupFunction from "@/app/actions/user";

export default function SignupComponent() {
  const [username, setUserName] = useState({
    email: "",
    name: "",
    password: "",
  })
  const router = useRouter();

  const handleClick = async () => {
    try {
      // const response = await axios.post("http://localhost:3000/api/user",
      //   username,
      // )

      const response = await signupFunction(username.email, username.name, username.password)

      console.log(response);
      if (response) {
        router.push("/names");
      }

    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserName((prevValue) => (
      {
        ...prevValue,
        [e.target.name]: e.target.value,
      }))
  }

  return (<div className="flex justify-center items-center h-screen ">
    <div className="flex flex-col justify-center items-center max-w-screen-sm w-full h-screen gap-4">
      {/* for signup header */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl font-bold">
          Signup
        </div>
        <div className="flex justify-center text-md gap-1 my-4">
          <div>
            Already have an account?
          </div>
          <div onClick={handleClick} className="underline">
            Login
          </div>
        </div>
      </div>

      {/* input areas */}
      <div className="flex flex-col gap-3 w-2/5">
        <InputArea onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange(e) }} name="email" label="Email" placeholder="Enter your Name" type="email" />
        <InputArea onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange(e) }} name="name" label="Name" placeholder="Enter your name" type="text" />
        <InputArea onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange(e) }} name="password" label="Password" placeholder="Enter your Password" type="password" />
      </div>
      <div className="mt-4 w-2/5">
        <button onClick={handleClick} className="bg-slate-500 text-white hover:text-white hover:bg-slate-800 px-4 py-2 w-full rounded-lg">Signup</button>
      </div>
    </div>
  </div>)
}

function InputArea({ label, placeholder, type, onChange, name }: { label: string, placeholder: string, type: string, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (<div >
    <div className="flex flex-col justify-center gap-2">
      <label className="text-md font-bold">{label}</label>
      <input onChange={onChange} name={name} placeholder={placeholder} type={type} className="rounded-md py-1 px-2 border border-black" />
    </div>
  </div>)
}
