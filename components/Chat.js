import React, { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { API_URL } from "@/config";
import axios from "axios";

const Chat = () => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isDisconnected, setIsDisconnected] = useState(false);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${API_URL}/chat`)
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.on("ReceiveMessage", (user, message) => {
        const updatedMessages = messages.concat({ user, message });
        setMessages(updatedMessages);
      });

      connection
        .start()
        .then(() => {
          console.log("SignalR Connected");
          setIsDisconnected(false);
        })
        .catch((err) => console.log("SignalR Connection Error: ", err));

      connection.onclose((error) => {
        console.log("SignalR Connection Closed: ", error);
        setIsDisconnected(true);
      });
    }
  }, [connection]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/chat`)
      .then((response) => setMessages(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      if (!isDisconnected) {
        connection.invoke("SendMessage", name, message);
        setMessage("");
        postMessage(name, message); // call postMessage with name and message arguments
      } else {
        console.log("SignalR not connected");
      }
    }
  };

  const postMessage = (user, message) => {
    axios
      .post(`${API_URL}/api/chat`, { user, message })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map((m, i) => (
          <div key={i}>
            {m.user}: {m.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
