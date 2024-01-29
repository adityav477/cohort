import { useEffect, useMemo, useState } from 'react'

function App() {
  // const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  // function findSum(num) {
  //   console.log("num is " + num);
  //   let ncount = 0;
  //   for (let index = 0; index <= num; index++) {
  //     ncount = ncount + index;
  //     // console.log("sum is " + ncount);
  //   }
  //   setSum(ncount);
  // }

  let sumofnumbers = useMemo(() => {
    let ncount = 0;
    console.log("num is " + num);
    for (let index = 0; index <= num; index++) {
      ncount = ncount + index;
      console.log("ncount is " + ncount);
    }
    return ncount;
  }, [num])

  console.log("sumofnumbers is " + sumofnumbers);
  return (
    <>
      <input onChange={(event) => {
        // console.log(event.target.value);
        setNum(event.target.value);
        // console.log("num got cahnged to " + num);
      }} />
      <p> Sum is {sumofnumbers}</p>

      <button onClick={() => setCount(count + 1)}>Count is ({count}) </button>
    </>
  )
}

export default App

// useEffect is for side effects after a render.
// useMemo is for memoizing values during a render.
// that's why you can't use useEffect instead of useMemo in for doing expensive operations and returning values
// https://g.co/bard/share/ad1533b685dc
