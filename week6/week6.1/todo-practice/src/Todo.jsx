import React, { useState } from "react"


function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

export default Todo;
