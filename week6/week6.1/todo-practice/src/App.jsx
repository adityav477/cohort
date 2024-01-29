import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import Createarea from './Createarea';
function App() {
  const [todoArray, setTodoArray] = useState([{ title: "title 1", description: "d1" }, { title: "t2", description: "d2" }]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(
      async (res) => {
        const json = await res.json();
        setTodoArray(json.todos);
      }
    )
  }, [])
  return (
    <>
      <Createarea setTodoArray={setTodoArray} />

      {todoArray.map((todo, index) => {
        return <Todo key={index} title={todo.title} description={todo.description} />
      })}
    </>
  )

}

export default App
