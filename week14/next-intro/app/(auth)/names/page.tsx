
// import Image from "next/image";
import prisma from "@/db";

async function fetchData() {
  const users = await prisma.user.findMany();
  return users;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {data.map((value, index) => {
          return <div key={index}>
            {value.name}
          </div>
        })}
      </div>
    </div>
  );
}
