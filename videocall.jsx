import { useEffect, useRef } from "react";
import socket from "./soket/soket";

const ROOM_ID = "doctor1_patient1";

const VideoCall = () => {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const peerRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const initMedia = async () => {
      try {
        console.log("Requesting camera + mic...");

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (!isMounted) return;

        streamRef.current = stream;
        localVideo.current.srcObject = stream;

        socket.emit("joinRoom", {
          roomId: ROOM_ID,
          userId: "user1",
          role: "patient",
        });

        socket.on("userJoined", handleUserJoined);
        socket.on("offer", handleOffer);
        socket.on("answer", handleAnswer);
        socket.on("ice-candidate", handleIceCandidate);
      } catch (err) {
        console.error("Media error:", err);
        alert("Camera or microphone not available. Please check device permissions.");
      }
    };

    initMedia();

    return () => {
      isMounted = false;

      socket.off("userJoined", handleUserJoined);
      socket.off("offer", handleOffer);
      socket.off("answer", handleAnswer);
      socket.off("ice-candidate", handleIceCandidate);

      if (peerRef.current) {
        peerRef.current.close();
      }
    };
  }, []);

  // ======================
  // CREATE PEER
  // ======================
  const createPeer = () => {
    const peer = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" }, // important for real connection
      ],
    });

    streamRef.current.getTracks().forEach((track) => {
      peer.addTrack(track, streamRef.current);
    });

    peer.ontrack = (e) => {
      remoteVideo.current.srcObject = e.streams[0];
    };

    peer.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("ice-candidate", {
          roomId: ROOM_ID,
          candidate: e.candidate,
        });
      }
    };

    peerRef.current = peer;
    return peer;
  };

  // ======================
  // EVENTS
  // ======================
  const handleUserJoined = async () => {
    const peer = createPeer();

    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);

    socket.emit("offer", {
      roomId: ROOM_ID,
      offer,
    });
  };

  const handleOffer = async ({ offer }) => {
    const peer = createPeer();

    await peer.setRemoteDescription(new RTCSessionDescription(offer));

    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);

    socket.emit("answer", {
      roomId: ROOM_ID,
      answer,
    });
  };

  const handleAnswer = async ({ answer }) => {
    if (!peerRef.current) return;

    await peerRef.current.setRemoteDescription(
      new RTCSessionDescription(answer)
    );
  };

  const handleIceCandidate = async ({ candidate }) => {
    try {
      if (peerRef.current && candidate) {
        await peerRef.current.addIceCandidate(
          new RTCIceCandidate(candidate)
        );
      }
    } catch (err) {
      console.error("ICE error:", err);
    }
  };

  return (
    <div className="flex gap-4 p-4">
      <video
        ref={localVideo}
        autoPlay
        muted
        playsInline
        className="w-1/2 rounded-lg bg-black"
      />
      <video
        ref={remoteVideo}
        autoPlay
        playsInline
        className="w-1/2 rounded-lg bg-black"
      />
    </div>
  );
};

export default VideoCall;