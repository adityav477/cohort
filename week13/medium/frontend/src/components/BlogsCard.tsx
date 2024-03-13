// import { useSetRecoilState } from "recoil";
// import { blogAtom } from "../outsiders/atoms";
import { useNavigate } from "react-router-dom";

export function BlogsCard({ id, word, date, title, description }: { id: string, word: string, date: string, title: string, description: string }) {
  // const setBlog = useSetRecoilState(blogAtom);
  const navigate = useNavigate();
  // console.log(id + word + date + title + description);

  const handleClick = () => {
    // @ts-ignore
    localStorage.setItem("blogId", id);

    navigate("/blog");
  }

  return (
    <div className="flex flex-col hover:scale-105 transform transition duration-500 gap-3 pt-4 max-w-screen-sm lg:w-10/12" onClick={handleClick}>
      <div className="flex items-center ">
        <div className="pr-2">
          <div className="flex justify-center items-center rounded-full bg-slate-600 text-white  h-7 w-7">
            {word[0]}
          </div>
        </div>
        <p className="font-normal ">{word}</p>
        <div className="h-0.5 w-0.5 rounded-full bg-slate-500 mx-1">
        </div>
        <p className="text-sm text-slate-700">{date}</p>
      </div>

      <div className="text-2xl font-bold">
        {title}
      </div>
      <div>
        {description.slice(0, 100) + "..."}
      </div>
      <div className="text-sm font-thin">
        {Math.ceil(description.length / 100) + " minute(s)"}
      </div>
      <div className="h-0.5 bg-slate-100">

      </div>
    </div>
  )
}


// function Avatar({ word }: { word: string }) {
//   return (
//   )
// }
