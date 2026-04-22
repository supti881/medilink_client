import { useContext, useEffect, useRef, useState } from "react";
import socket from "../soket/soket";
import { AuthContext } from "../AuthContext/AuthContext";

const ROOM_ID = "doctor1_patient1";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user, role } = useContext(AuthContext);
  const bottomRef = useRef(null);

  // ======================
  // JOIN ROOM + LISTEN
  // ======================
  useEffect(() => {
    if (!user || !role) return;

    socket.emit("joinRoom", {
      roomId: ROOM_ID,
      userId: user.uid,
      role,
    });

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, [user, role]);

  // ======================
  // AUTO SCROLL
  // ======================
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ======================
  // SEND MESSAGE
  // ======================
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
          <h2 className="text-lg font-semibold">
            {role === "doctor" ? "👨‍⚕️ Doctor Chat" : "💬 Patient Chat"}
          </h2>
          <p className="text-sm text-gray-500">Room: {ROOM_ID}</p>
        </div>

        <span className="text-xs bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
          Online
        </span>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages?.map((msg, i) => {
          const isMe = msg.senderId === user?.uid;

          return (
            <div
              key={i}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl shadow text-sm ${
                  isMe
                    ? "bg-emerald-500 text-white rounded-br-sm"
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

      {/* INPUT BOX */}
      <div className="bg-white p-3 border-t flex items-center gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
