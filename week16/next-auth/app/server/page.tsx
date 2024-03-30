import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";


export default async function Signup(){
  const session = await getServerSession();

  return (
  <div>
     <Appbar />
      <div>

      </div>
    </div>
  )
}
