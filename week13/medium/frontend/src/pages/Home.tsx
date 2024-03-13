import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";

export function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Immediately execute after component renders (using useEffect optional)
  useEffect(() => {
    const handleNavigation = () => {
      if (token) {
        navigate("/blogs");
      } else {
        navigate("/signup");
      }
    };

    handleNavigation();
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <div>
      <Loader />
    </div>
  )

}
