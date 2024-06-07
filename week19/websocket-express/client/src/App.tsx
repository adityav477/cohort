import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("connected");
      setSocket(socket);
    }

    socket.onmessage = (message) => {
      console.log("Received Message", message.data);
      setMessage(m => [...m, message.data]);
    }
  })

  if (!socket) {
    return <>
      ....Loading
    </>
  }
  return (
    <>
      <div>
        Hello
      </div>
      {message.map(message => {
        return <div>
          {message}
        </div>
      })}

    </>
  )
}

export default App
