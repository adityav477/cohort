import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }
});

// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST"],
//   credentials: true,
// }))
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World")
})

io.on("connection", (socket) => {
  // console.log(`User with socket Id: ${socket.id} connected to the io`);
  // socket.broadcast.emit("welcome", `user with socket id : ${socket.id} joined`);

  //to receive a message from one user and send it to another user connected to the socket
  socket.on("message", ({ message, room }) => {
    // console.log("message triggered ", data);
    // socket.broadcast.emit("data-received", { message, room });
    socket.to(room).emit("data-received", message)
  })


  //to joining the room
  socket.on("Added-Room", (roomName) => {
    socket.join(roomName);
  })

  socket.on("disconnect", () => {
    console.log("Disconnected ", socket.id);
  })
})

server.listen(port, () => {
  console.log("Backend started at port 300");
})
