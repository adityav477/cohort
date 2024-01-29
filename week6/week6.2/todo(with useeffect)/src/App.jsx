import { useEffect, useState } from 'react'
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([])
  const [todoid, setTodoid] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then(
      (res) => {
        console.log(res);
        setTodos(res.data.todos);
      }
    ).catch((err) => { console.log(err) });
  }
    , [])

  return (
    <>
      {/* {todos.map((todo) => { */}
      {/*   return <Todo title={todo.title} description={todo.description} /> */}
      {/* })} */}
      <Todoid id={3} />
    </>
  )

  function Todo({ title, description }) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }

  function Todoid({ id }) {
    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id).then((res) => {
        console.log(res);
        setTodoid(res.data.todo);
      })
    })

    return (
      <div>
        <h1>{todoid.title}</h1>
        <p> {todoid.description}</p>
      </div>
    )
  }
}

export default App
