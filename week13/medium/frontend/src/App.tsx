import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { RecoilRoot } from "recoil"
import { Blogs } from "./pages/Blogs"
import { Blog } from "./pages/Blog"
import { CreateBlog } from "./pages/CreateBlog"

function App() {

  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/create" element={<CreateBlog />}></Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  )
}

export default App
