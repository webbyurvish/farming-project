import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, fetchMessages } from "@/slices/chatSlice";

const Chat = ({ currentUser, otherUser }) => {
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState(false);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendMessage({
        senderId: currentUser,
        receiverId: otherUser,
        content: message,
      })
    );
    setMessage("");
    setSentMessage(true);
  };

  useEffect(() => {
    if (sentMessage) {
      dispatch(fetchMessages({ currentUser, otherUser }));
      setSentMessage(false);
    }
  }, [dispatch, currentUser, otherUser, sentMessage]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-transparent text-gray-800 p-10">
      <div className="flex flex-col flex-grow w-full max-w-lg bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <ul>
            {messages.map((message, index) => (
              <>
                {message.senderId === currentUser && (
                  <div
                    key={index}
                    className="flex w-full mt-2 space-x-3 max-w-xs "
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                )}
                {message.senderId !== currentUser && (
                  <div
                    key={index}
                    className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"
                  >
                    <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">{message.content}</p>
                    </div>

                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                )}
              </>
            ))}
          </ul>
        </div>

        <form className="bg-gray-300 p-4" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              className="flex-grow h-10 rounded px-3 text-sm"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message…"
            />
            <button
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
