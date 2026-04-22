import React, { useEffect, useRef, useState } from "react";
import socket from "../soket/soket";

const currentUser = {
  id: "doctor1",
  role: "doctor",
};

const ROOM_ID = "doctor1_patient1";

const Messages = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  // =========================
  // JOIN ROOM + RECEIVE MSG
  // =========================
  useEffect(() => {
    socket.emit("joinRoom", {
      roomId: ROOM_ID,
      userId: currentUser.id,
      role: currentUser.role,
    });

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  // =========================
  // AUTO SCROLL
  // =========================
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // =========================
  // SEND MESSAGE
  // =========================
  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("sendMessage", {
      roomId: ROOM_ID,
      message,
    });

    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">👨‍⚕️ Doctor Panel</h2>
          <p className="text-sm text-gray-500">Consultation Room</p>
        </div>

        <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
          Patient Online
        </span>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages?.map((msg, i) => {
          const isMe = msg.senderId === currentUser.id;

          return (
            <div
              key={i}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl shadow text-sm ${
                  isMe
                    ? "bg-blue-500 text-white rounded-br-sm"
                    : "bg-white text-gray-800 rounded-bl-sm"
                }`}
              >
                {/* ROLE */}
                <p className="text-xs opacity-70 mb-1">{msg.senderRole}</p>

                {/* MESSAGE */}
                <p>{msg.message}</p>

                {/* TIME */}
                <p className="text-[10px] opacity-60 mt-1 text-right">
                  {msg.time ? new Date(msg.time).toLocaleTimeString() : ""}
                </p>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef}></div>
      </div>

      {/* INPUT */}
      <div className="bg-white p-3 border-t flex items-center gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Reply to patient..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
