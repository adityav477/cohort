
import { useState, useEffect } from "react";
import axios from "axios";
import { useIsOnline } from "./Isonline";

export function useTodo(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const isOnline = useIsOnline();
  console.log("inside useTodod");

  useEffect(() => {
    console.log("inside useEffect 1");
    const intervalValue = setInterval(() => {
      if (isOnline) {
        axios.get("https://sum-server.100xdevs.com/todos")
          .then((res) => {
            console.log("insde useTodo useEffect");
            setTodos(res.data.todos);
            setLoading(false);
          })
      } else {
        alert("your are offline");
        clearInterval(intervalValue);
      }
    }, n * 1000)

    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })

    return () => {
      clearInterval(intervalValue);
    }
  }, [isOnline]);


  return { todos, loading, isOnline };
}
