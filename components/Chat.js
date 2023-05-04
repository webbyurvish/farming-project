import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as signalR from "@microsoft/signalr";
import { API_URL } from "@/config";
import { addMessage } from "@/slices/chatSlice";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const connectionRef = useRef(null);
  const mentorId = 7;
  const senderid = 1;

  const dispatch = useDispatch();

  const chatHistory = useSelector((state) => state.chat.chatHistory);

  useEffect(() => {
    // Create a SignalR connection
    connectionRef.current = new signalR.HubConnectionBuilder()
      .withUrl(`${API_URL}/chat`)
      .build();

    // Subscribe to incoming messages from the server
    connectionRef.current.on("ReceiveMessage", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Start the SignalR connection
    connectionRef.current.start();

    // Unsubscribe from the SignalR connection on component unmount
    return () => {
      connectionRef.current.stop();
    };
  }, []);

  // Send a new message to the server
  const sendMessage = (e) => {
    e.preventDefault();
    const message = {
      senderId: senderid,
      receiverId: mentorId,
      content: newMessage,
    };
    console.log(message);
    connectionRef.current.invoke("SendMessage", message);
    setNewMessage("");
  };

  return (
    <div>
      <h2>Chat with Mentor {mentorId}</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>
              {message.senderId}: {message.content}
            </p>
          </div>
        ))}
        {chatHistory.map((message) => (
          <div key={message.id}>
            <strong>{message.sender.name}: </strong>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
