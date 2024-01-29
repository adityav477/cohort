import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   function onClickHandler() {
//     setCount(count + 1);
//   }

//   //this doesn't get's render in the frondend because react is not listening actively to the change in the state of count thus use useState
//   // let state = {
//   //   count: 0,
//   // };
//   // function onClickHandler() {
//   //   state.count++;
//   //   console.log(state.count);
//   // }
//   return (
//     <div>
//       <button onClick={onClickHandler}>Counter {state.count} </button>
//     </div>
//   );
// }

// another way
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}
function CustomButton(props) {
  console.log(props);

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;
