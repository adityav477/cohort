import { atom } from "recoil"

export const signupUserNameAtom = atom({
  key: "signupAtom",
  default: {
    name: "",
    email: "",
    password: "",
  }
})

export const loggedUserAtom = atom({
  key: "loggedUserAtom",
  default: "",
})

export const signinUserNameAtom = atom({
  key: "signinAtom",
  default: {
    email: "",
    password: "",
  }
})

//for storing the blog to show on the blog component page
export const blogAtom = atom({
  key: "blogAtom",
  default: {
    id: "",
    title: "",
    description: "",
    date: "",
    author: {
      id: "",
      email: "",
      password: "",
      name: "",
    }
  }
})

//for useBlogs and stop giving a backend call eventhough we just use arrow back to go the same page
export const useBlogAtom = atom({
  key: "useBlogAtom",
  default: [],
})

export const navbarAtom = atom({
  key: "navbarAtom",
  default: false

})

// export const oChangeSignupUserName = selector({
//   key: "oChangeSignupUserName",
//   get: ({ get }) => {
//     const signupUserName = get(signupUserNameAtom);
//   }
// })
