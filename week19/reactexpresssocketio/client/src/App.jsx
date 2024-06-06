import React, { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import { Container, TextField, Button } from "@mui/material";

const App = () => {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [roomJoin, setRoomJoin] = useState("");
  const [socketId, setSocketId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  }

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("Added-Room", roomJoin);
  }

  const socket = useMemo(() => io("http://localhost:3000"), [])

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected with user Id: ", socket.id);
      setSocketId(socket.id);
    })

    socket.on("welcome", (s) => {
      console.log(s);
    })

    socket.on("data-received", (message) => {
      console.log(message)
      setReceivedMessages(prevValue => [...prevValue, message]);
      console.log(receivedMessages);
    })

    return () => {
      socket.disconnect();
    }
  }, [])

  return <Container maxWidth="md">
    {/* <Typography variant="h1" component='div' gutterBottom> */}
    {/*   Welcome to socket.io */}
    {/* </Typography> */}

    {/* <form onSubmit={} > */}
    {/*   <TextField id="Room" label="Room" value={room} onChange={(e) => { */}
    {/*     setRoom(e.target.value); */}
    {/*   }} /> */}
    {/**/}
    {/*   <Button type="submit" variant="contained" color="primary"> */}
    {/*     Send in Room */}
    {/*   </Button> */}
    {/* </form> */}
    <div>
      {socketId}
    </div>

    <form onSubmit={joinRoomHandler}>
      <TextField id="JoinRoom" label="Join Room" value={roomJoin} onChange={(e) => {
        setRoomJoin(e.target.value);
      }} />

      <Button type="submit" variant="contained" color="primary">
        Join Room
      </Button>
    </form>

    <form onSubmit={handleSubmit}>
      <TextField id="Message" label="Message" value={message} onChange={(e) => {
        setMessage(e.target.value);
      }} />

      <TextField id="Room" label="Room" value={room} onChange={(e) => {
        setRoom(e.target.value);
      }} />

      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </form>

    <div>
      {receivedMessages.map((m) => {
        return <div>
          {m}
        </div>
      })}
    </div>

  </Container >
}

export default App;
