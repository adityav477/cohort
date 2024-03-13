import { Appbar } from "../components/Appbar";
import { ChangeEvent, useState } from "react";
import { BACKEND_ROUTE } from "../outsiders/conf";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateBlog() {
  const navigate = useNavigate();
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
  })

  async function handleSubmit() {
    // console.log(newBlog);
    try {
      const response = await axios.post(`${BACKEND_ROUTE}blog/post`, newBlog
        , {
          headers: {
            "Authorization": localStorage.getItem("token"),
          },
        })
      localStorage.setItem("blogId", response.data.post.id);
      navigate("/blog");

    } catch (error) {
      alert("Error while creating blog: " + error);
    }
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    // console.log(name, value);
    setNewBlog((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  return (
    <div>
      <Appbar onClick={handleSubmit} />
      <div className="flex flex-col justify-center items-center gap-4 pt-10">
        <textarea name="title" value={newBlog.title} placeholder="Title..." onChange={handleChange} className="text-5xl  placeholder:p-1 w-3/5" />
        <textarea name="description" value={newBlog.description} placeholder="Boliye...." onChange={handleChange} className="text-xl  placeholder:text-2xl placeholder:p-2 h-screen w-3/5" />
      </div>
    </div>
  )
}
