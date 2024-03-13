// import { useRecoilState } from "recoil"
import { Appbar } from "../components/Appbar"
// import { blogAtom } from "../outsiders/atoms";
import { useEffect, useState } from "react";
import { BACKEND_ROUTE } from "../outsiders/conf";
import axios from "axios";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";

export function Blog() {
  // const [blog, setBlogAtom] = useRecoilState(blogAtom);
  const [blog, setBlogAtom] = useState();

  const navigate = useNavigate();//for Appbar publish button

  useEffect(() => {
    axios.get(`${BACKEND_ROUTE}blog/${localStorage.getItem("blogId")}`, {
      headers: {
        "Authorization": localStorage.getItem("token"),
      }
    })
      .then((response) => {
        const blogPost = response.data.post;
        // console.log("from blog's axios");
        // console.log(blogPost);
        setBlogAtom(blogPost);
      })
  }, [])

  //for appbar button routing so 
  const handleClick = () => {
    console.log("from blogs");
    navigate("/create");
  }

  return (
    <div>
      <Appbar onClick={handleClick} />
      {blog ? <div>
        {/* Main blog */}
        <div className="lg:grid grid-cols-3 h-screen">
          {/* for blog post */}
          <div className="col-span-2 flex justify-center ">
            <div className="max-h-max max-w-screen-md pt-10">
              <div className="flex flex-col gap-5">
                <div className="text-5xl font-semibold">
                  {/* @ts-ignore */}
                  {blog.title}
                </div>
                <div>
                  {/* @ts-ignore */}
                  {blog.description}
                </div>
              </div>
            </div>
          </div>

          {/* for Author details */}
          <div className="flex flex-col justify-start border-l border-2 lg:col-span-1 gap-2 p-4">
            <div className="lg:font-semibold pb-4">
              Author
            </div>
            <div className="grid grid-cols-11 ">
              <div className="col-span-1 flex justify-center items-center w-full ">
                <div className="text-center text-white bg-slate-600 rounded-full h-7 w-7">
                  {/* @ts-ignore */}
                  {blog.author.name[0]}
                </div>
              </div>

              {/* Author details */}
              <div className="col-span-10 flex flex-col mx-2 gap-2">
                <div className="lg:text-3xl lg:font-bold">
                  {/* @ts-ignore */}
                  {blog.author.name}
                </div>
                <div>
                  {"lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat"}
                </div>
              </div>
            </div>
            {/* Avatar components */}
          </div>
        </div>
      </div>
        : <Loader />
      }

    </div>
  )
}
