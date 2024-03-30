import { getServerSession } from "next-auth";
import { Appbar } from "@/components/Appbar";
import { NEXT_AUTH } from "../lib/auth";

export default async function User() {
  const session = await getServerSession(NEXT_AUTH);

  return (
    <div>
      <Appbar />
      <div>
        {JSON.stringify(session)}
      </div>
    </div>
  )
}
