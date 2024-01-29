import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState("My name is Aditya")

  function handleClick() {
    setTitle("my name is " + Math.floor(Math.random() * 10));
  }

  return (
    <>
      <button onClick={handleClick}>Add</button>
      <Header title={title} />
      <Header title="aditya" />
    </>
  )

  function Header({ title }) {
    return (
      <>
        <h1>{title}</h1>
      </>
    )
  }
}

export default App
