import React from "react";

interface labelProps {
  label: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export function Label({ label, placeholder, onChange }: labelProps) {
  return (
    <div className="flex flex-col justify-center w-4/5 mx-2 my-3 gap-2 ">
      <label htmlFor={label} className="font-normal m-y3">{label}</label>
      <input id={label} placeholder={placeholder} onChange={onChange} className="hover:shadow-md hover:shadow-gray-500 focus:outline-none focus:shadow-md focus:shadow-gray-500 border-black-600 border-2 rounded-lg w-full py-1 px-3 " />
    </div>
  )

}
