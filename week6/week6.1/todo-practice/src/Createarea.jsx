import React, { useState } from "react";

function Createarea({ setTodoArray }) {
  const [input, setInput] = useState({
    title: "",
    description: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleClick() {
    setTodoArray(prevValue => {
      return [
        ...prevValue,
        input
      ]
    });
    setInput({
      title: "",
      description: ""
    })
  }

  return (
    <div>
      <input onChange={handleChange} name="title" type='text' className="titleinput" value={input.title}></input>
      <textarea rows={5} cols={5} name="description" onChange={handleChange} className="descriptioninput" value={input.description}></textarea>
      <button onClick={handleClick} >Add</button>
    </div>
  )
}

export default Createarea;
