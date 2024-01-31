import { useContext, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, isEvenOrOdd } from './store/count'

function App() {

  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
  )

  function Count() {
    return <div>
      <Countrender />
      <Buttons />
    </div>
  }

  function Countrender() {
    const count = useRecoilValue(countAtom);
    return <div>
      {count}
    </div>
  }

  function Buttons() {
    // const [count, setCount] = useRecoilState(countAtom);
    const setCount = useSetRecoilState(countAtom);
    const Even = useRecoilValue(isEvenOrOdd);
    return (
      <div>
        <button onClick={() => setCount(count => count + 1)}>Add</button>
        <button onClick={() => setCount(count => count - 1)}>Subtract</button>
        {Even}
      </div>
    )
  }
}

export default App
