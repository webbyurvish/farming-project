import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, fetchMessages } from "@/slices/chatSlice";

const Chat = ({ currentUser, otherUser }) => {
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState(false);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  // let menteeMessages = messages.map(
  //   (message) => message.receiverId !== mentor.id
  // );

  // let mentorMessages = messages.map(
  //   (message) => message.receiverId === mentor.id
  // );

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
    <div>
      <body className="flex flex-col items-center justify-center w-screen h-screen bg-transparent text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            <ul>
              {messages.map((message, index) => (
                // <li key={index}>{message.content}</li>
                <>
                  {message.senderId === currentUser && (
                    <div
                      key={index}
                      className="flex w-full mt-2 space-x-3 max-w-xs "
                    >
                      <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                      <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                        <p class="text-sm">{message.content}</p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                  )}
                  {message.senderId !== currentUser && (
                    <div
                      key={index}
                      className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"
                    >
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">{message.content}</p>
                      </div>
                      <span className="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                      <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                  )}
                </>
              ))}
            </ul>
            {/* <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>

              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>

              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div> */}
          </div>

          <form className="bg-gray-300 p-4" onSubmit={handleSubmit}>
            <input
              className="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message…"
            />
            {/* <button type="submit">Send</button> */}
          </form>
        </div>
      </body>
    </div>
  );
};

export default Chat;
