import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { navbarAtom } from "../outsiders/atoms";
import { useRecoilState } from "recoil";

export function Appbar({ onClick }: { onClick: () => void }) {
  const [isOpen, setIsOpen] = useRecoilState(navbarAtom);
  const word = localStorage.getItem("name");

  function navbar() {
    setIsOpen(prevValue => !prevValue);
  }

  const navbarItems = [
    {
      list: "Home",
      Link: "/blogs",
    },
    {
      list: "Membership",
      Link: "#",
    },
    {
      list: "About",
      Link: "#",
    },
    {
      list: "Contact",
      Link: "#",
    }
  ]


  return <div className="mx-auto border-b border-slate-400 px-20 pb-2">
    <div className="flex justify-between items-center pl-10 py-3">
      <div className="font-bold text-4xl ">
        Medium
      </div>

      {/* sidebar */}
      <section className={isOpen ? "block" : "hidden"}>
        <div className="fixed top-0 right-0 h-full w-full backdrop-blur-sm z-50">
          <section className="fixed top-0 right-0 bg-white h-full w-96 z-50">
            <div className="flex justify-end p-4" >
              <IoCloseSharp className="text-xl" onClick={navbar} />
            </div>
            <div className="flex flex-col justify-center items-center text-slate-500 text-xl font-semibold gap-4">
              {navbarItems.map((value, index) => {
                return <div key={index}>
                  <Link to={value.Link} >{value.list}</Link>
                  <hr className="w-3/5" />
                </div>
              })}

              <div>
                <button onClick={onClick} className="text-white font-semibold bg-slate-500 rounded-xl w-full h-auto py-2 px-3">Publish</button>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* navbar for computer */}
      <div className="flex font-thin justify-center items-center gap-4">
        <div className="md:invisible lg:visible flex justify-center items-center gap-4 ">
          {navbarItems.map((value, index) => {
            return <>
              <Link key={index} to={value.Link} className="hover:scale-105 transofrm transition duration-500">{value.list}</Link>
            </>
          })}

          <div>
            <button onClick={onClick} className="text-white font-semibold bg-slate-500 rounded-xl hite hover:text-black hover:bg-slate-200 w-full h-auto py-1 px-3">Publish</button>
          </div>

          {/* Avatar component */}
          <div className="text-center text-white bg-slate-600 rounded-full h-7 w-7">
            {/* @ts-ignore */}
            {word[0]}
          </div>
        </div>
        <GiHamburgerMenu className="text-2xl lg:hidden" onClick={navbar} />
      </div>
    </div >
  </div >
}
