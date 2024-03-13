import { useRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Label } from "../components/Label";
import { Quote } from "../components/Quote";
import { SigninInput } from "@adimanav/common/build/zod/user";
import { signinUserNameAtom } from "../outsiders/atoms";
import React from "react";
import axios from "axios";
import { BACKEND_ROUTE } from "../outsiders/conf";
import { useNavigate } from "react-router-dom";


export function Signin() {
  const [userName, setUserName] = useRecoilState<SigninInput>(signinUserNameAtom)
  // const setLoggedUser = useSetRecoilState(loggedUserAtom);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.post(`${BACKEND_ROUTE}user/signin`, {
        email: userName.email,
        password: userName.password,
      })
      // setLoggedUser(`${response.data.name}`);
      alert("LoggedIn Successfully");
      localStorage.setItem("token", `Bearer ${response.data.jwt}`);

      //we saved name in localstorage instead of a atom bcs when we reload the website the atom resets to default and the name disappears
      localStorage.setItem("name", response.data.name);//sets the name of the user for appbar
      navigate("/blogs");
    } catch (error) {
      alert("SignIn error " + error);
    }
  }

  return (
    <div className="grid grid-cols-2 h-screen" >
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-6 w-3/5">
          <Header heading="Log In" subheading="Don't have an Account? " linkName="Sign up" linkReal="/signup" />
          <Label label="Email" placeholder="Enter registered email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName((prevValue) => ({
              ...prevValue,
              email: e.target.value,
            }))
          }} />
          <Label label="Password" placeholder="Enter password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName((prevValue) => ({
              ...prevValue,
              password: e.target.value,
            }))
          }} />
          <Button label="Sign In" onClick={handleClick} />
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <Quote quote="'Kabira khada baajar me kake lagu paay guru ne hi gobind diyo bataye'" by="Kabira" extra="Random" />
        </div>
      </div>
    </div>
  )
}
