import React from "react";
import { useRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Label } from "../components/Label";
import { Quote } from "../components/Quote";
import { signupUserNameAtom } from "../outsiders/atoms";
import { SignupInput } from "@adimanav/common/build/zod/user";

//networking
import axios from "axios";
import { BACKEND_ROUTE } from "../outsiders/conf";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [userName, setUserName] = useRecoilState<SignupInput>(signupUserNameAtom);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.post(`${BACKEND_ROUTE}user/signup`, {
        name: userName.name,
        email: userName.email,
        password: userName.password,
      })
      alert("User Created Successfully");
      localStorage.setItem("token", `Bearer ${response.data.jwt}`)
      navigate("/blogs");
    } catch (error) {
      alert("Signup error: " + error);
    }
  }
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center w-3/5 p-6">
          <Header heading="Create an Account" subheading="Already have and account? " linkName="Login" linkReal="/signin" />
          <Label label="Name" placeholder="Enter Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName((prevValue) => (
              {
                ...prevValue,
                name: e.target.value
              }
            ))
          }} />

          < Label label="Email" placeholder="Enter email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName((prevValue) => (
              {
                ...prevValue,
                email: e.target.value,
              }
            ))
          }} />

          <Label label="Password" placeholder="Enter your password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName((prevValue) => (
              {
                ...prevValue,
                password: e.target.value,
              }
            ))
          }} />
          <Button label="Sign Up" onClick={handleClick} />
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <Quote quote="'Bada hua so kya hua jaise ped khajur, Panthi ko chaya nhi fal lage ati dur'" by="Kabir" extra="Random" />
      </div>
    </div>
  )
}

