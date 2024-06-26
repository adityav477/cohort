import express from "express";
import { WebSocketServer, WebSocket } from "ws";

const app = express();
let httpServer = app.listen(3000);


let wss = new WebSocketServer({ server: httpServer });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  console.log("hi ");

  ws.send("Hello from the server");
});

app.get("/", (req, res) => {
  res.send("hello from ws");
})


