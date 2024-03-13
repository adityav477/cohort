import { AiOutlineLoading3Quarters } from "react-icons/ai"
export function Loader() {
  return (

    <div className="fixed top-0 right-0 flex items-center justify-center backdrop-blur-sm h-screen w-screen z-50">
      <AiOutlineLoading3Quarters className="animate-spin text-5xl" />
    </div>
  )
}
