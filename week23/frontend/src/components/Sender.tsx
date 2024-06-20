import { useState, useEffect } from "react";

function Sender() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [, setPC] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    const socket = new WebSocket("http://localhost:8080");
    setSocket(socket);
    socket.onopen = () => {
      socket.send(JSON.stringify({
        type: "sender"
      }))
    }
  }, [])

  async function senderFunction() {
    if (!socket) {
      alert("Socket not Found");
      return;
    }

    socket.onmessage = async (event) => {
      console.log("inside socket of sender");
      const message = JSON.parse(event.data);
      console.log(message.type === "createAnswer");
      if (message.type === "createAnswer") {
        console.log("insde createAnswer in sender");
        await pc?.setRemoteDescription(message.sdp);
      } else if (message.type === "isCandidate") {
        console.log("insde iceCandidate sender ")
        await pc?.addIceCandidate(message.candidate);
      }
    }

    const pc = new RTCPeerConnection();
    setPC(pc);

    pc.onnegotiationneeded = async () => {
      console.log("inside onnegotiationneeded");
      const offer = await pc.createOffer();
      pc.setLocalDescription(offer);
      socket?.send(JSON.stringify({ type: "create-offer", sdp: offer }));
    }

    //only the sender needs to have onicecandidate because here we are doing one sided communication
    //we first get the icecandidate from the stun server that we need to pass through our websocket to receiver 
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("inside icecandidate in sender");
        socket?.send(JSON.stringify({ type: "iceCandidate", candidate: event.candidate }));
      }
    }

    //after establisihing and getting the ice candidate now a connection is established we send the video through to the receiver  
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    const track = stream.getVideoTracks()[0];
    pc.addTrack(track);
  }

  return (
    <div>Sender
      <button onClick={senderFunction}>
        Send Video
      </button>
    </div>
  )
}

export default Sender
