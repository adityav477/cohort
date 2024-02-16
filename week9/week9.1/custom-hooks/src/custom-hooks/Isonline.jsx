import { useEffect, useState } from "react"

export function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    })

    window.addEventListener("offline", () => {
      setIsOnline(false);
    })

    return () => {
      window.removeEventListener("online", () => console.log("online removed"));
      window.removeEventListener("offline", () => console.log("offline removed"));
    }
  }, [])

  return isOnline;
}
