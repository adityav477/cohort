import { useNavigate } from "react-router-dom"

export const signup = () => {
  const navigate = useNavigate();
  console.log("form functions.tsx");
  navigate("/create");
}
