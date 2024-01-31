import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './CountContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  )

  function Count() {
    return <div>
      <Countrender />
      <Buttons />
    </div>
  }

  function Countrender() {
    const { count } = useContext(CountContext);
    return <div>
      {count}
    </div>
  }

  function Buttons() {
    const { count, setCount } = useContext(CountContext);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
      </div>
    )
  }
}

export default App
