import { useNavigate } from "react-router-dom";

interface headerProps {
  heading: string;
  subheading: string;
  linkName: string;
  linkReal: string;
}

export function Header({ heading, subheading, linkName, linkReal }: headerProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${linkReal}`);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl my-3">{heading}</h1>
      <p>{subheading} <a onClick={handleClick} className="underline">{linkName}</a></p>
    </div>
  )
}
