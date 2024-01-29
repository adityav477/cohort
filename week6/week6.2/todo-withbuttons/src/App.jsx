import { useEffect, useState } from 'react'
import axios from "axios";

function App() {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const [id, setId] = useState(0);

  useEffect(() => {
    if (id !== 0) {
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id).then((res) => {
        console.log(res.data);
        setTodo(res.data.todo);
      }).catch(err => console.log(err));
    }
  }, [id])

  return (
    <>
      <button onClick={() => { setId(1) }}>1</button>
      <button onClick={() => { setId(2) }}>2</button>
      <button onClick={() => { setId(3) }}>3</button>
      <button onClick={() => { setId(4) }}>4</button>
      <Todo title={todo.title} description={todo.description} />
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

}

export default App
