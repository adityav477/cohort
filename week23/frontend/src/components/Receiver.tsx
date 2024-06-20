import { useState, useEffect, useRef } from "react"

export default function Receiver() {
  const [, setSocket] = useState<WebSocket | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const socket = new WebSocket("http://localhost:8080");
    setSocket(socket);
    socket.onopen = () => {
      socket.send(JSON.stringify({
        type: "receiver",
      }))
    }
    //here we didn't created a trigger button cause this is just the receiver and one way video streaming
    receiving(socket);
  }, [])

  async function receiving(socket: WebSocket) {

    const pc = new RTCPeerConnection();

    //this creates and assigns the received video from stream to the video object
    pc.ontrack = (event) => {
      console.log("insde ontrack in receiver");
      console.log(event);
      const video = document.createElement("video");
      document.body.appendChild(video);
      video.srcObject = new MediaStream([event.track]);
      video.play();
    }

    //when we get the icecandidate of the sender then we send our candidate back to the sender 
    pc.onicecandidate = (event) => {
      console.log("inside icecandidate receiver");
      console.log(event);
      if (event.candidate) {
        socket?.send(JSON.stringify({ type: "iceCandidate", candidate: event.candidate }));
      }
    }

    //on receiving the message from the socket backend
    socket.onmessage = async (event) => {
      console.log("inside of socket in receiver");
      console.log(event);
      const message = JSON.parse(event.data);
      if (message.type === "createOffer") {
        await pc.setRemoteDescription(message.sdp);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        console.log("received offer from sender in receiver ");
        console.log(pc.localDescription);
        console.log(answer);
        socket.send(JSON.stringify({ type: "create-answer", sdp: pc.localDescription }));
      } else if (message.type === "iceCandidate") {
        console.log("inside iceCandidate receiver");
        await pc.addIceCandidate(message.candidate);
      }
    }
  }


  return (
    <div>
      receiver
      <video ref={videoRef}></video>
    </div>
  )
}
