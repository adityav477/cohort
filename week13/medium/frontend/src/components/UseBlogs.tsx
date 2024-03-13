// not in use 
// not in use 
import axios from "axios";
import { useEffect } from "react";
import { BACKEND_ROUTE } from "../outsiders/conf";
import { useState } from "react";

export function useBlogs() {
  const [blogs, setBlogs] = useState();
  // const [blogs, setBlogs] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // console.log("useblogs called");
    axios.get(`${BACKEND_ROUTE}blog/bulk`, {
      headers: {
        "Authorization": `${token}`
      }
    }).then((response) => {
      setBlogs(response.data);
    }).catch((error) => console.log("error from axios " + error));
  }, [])

  return blogs;
}
