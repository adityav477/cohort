import React from "react";

interface buttonProps {
  label: string,
  onClick: (e: React.MouseEvent) => void,
}

export function Button({ label, onClick }: buttonProps) {
  return (
    <div className="flex justify-center w-full my-5">
      <button onClick={onClick} className="text-white font-normal bg-gray-700 hover:bg-gray-100 hover:text-black hover:ring-black hover:shadow-black hover:shadow-lg focus:outline-none focus:ring-1 rounded-lg w-4/5 px-2 py-2 mx-2">{label}</button>
    </div>
  )
}
