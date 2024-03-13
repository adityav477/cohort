import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { Loader } from "../components/Loader";
import { useBlogs } from "../components/UseBlogs";
import { useNavigate } from "react-router-dom";

export function Blogs() {
  const navigate = useNavigate();

  const blogs = useBlogs();

  const handleClick = () => {
    console.log("from blogs");
    navigate("/create");
  }

  return (
    <div >
      <div>
        <Appbar onClick={handleClick} />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 pt-5">
        {/* @ts-ignore */}
        {blogs ? blogs.map((value, index) => {
          // @ts-ignore
          return <BlogsCard key={index} id={value.id} word={value.author.name} date={value.date.slice(0, 10)} title={value.title} description={value.description} />
        }) : <Loader />}

      </div>
    </div>
  )
}
