import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMousePointer } from './custom-hooks/useMousePointer';
import { useTodo } from './custom-hooks/Todo';
import { useDebounce } from './custom-hooks/Debounce';


function App() {
  // const pointer = useMousePointer();

  // const { todos, loading, isOnline } = useTodo(5);
  // console.log("App rerendered");
  //
  // if (isOnline) {
  //
  //   return (
  //     <>
  //       {loading ? <p>loading</p> :
  //         todos.map((todo) => {
  //           return (
  //             <div>
  //               <Todo key={todo.id} todo={todo} />
  //               {/* <h2>Mouse pointer is x: {pointer.x} and y: {pointer.y}</h2> */}
  //
  //             </div>
  //           )
  //         })}
  //     </>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <h2>You are offline</h2>
  //     </div>
  //   )
  // }

  //usemousepointer
  // return (
  //   <div>
  //     <h1>Your mouse is on x: {pointer.x} and y: {pointer.y}</h1>
  //   </div>
  // )

  //for useDebounce custom custom-hooks
  const [input, setInput] = useState("");
  const debouncer = useDebounce(input, 500);
  return (
    <div>
      <h2>{debouncer}</h2>
      <input
        type='text'
        placeholder='Search..'
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  )

}



function Todo({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <br />
      <p>{todo.description}</p>
    </div>
  )
}

export default App
