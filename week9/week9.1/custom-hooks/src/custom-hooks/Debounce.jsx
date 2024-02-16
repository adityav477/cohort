import { useEffect, useState } from "react";

export function useDebounce(inputValue, milliseconds) {
  const [debounce, setDebounce] = useState(inputValue);

  // console.log(milliseconds);
  useEffect(() => {
    // console.log("inside useEffect");
    const intervalId = setInterval(() => {
      // console.log("inside setinterval");
      setDebounce(inputValue);
    }, 5000)

    return () => {
      // console.log("return interval got called");
      clearInterval(intervalId);
    }
  }, [inputValue])

  return debounce;
}
