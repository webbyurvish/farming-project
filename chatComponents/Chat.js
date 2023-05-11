import React from "react";
import navimage from "@/public/images/navbarlogopng.png";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "@/slices/chatContext";
import { useContext } from "react";

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={navimage} alt="" />
          <img src={navimage} alt="" />
          <img src={navimage} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
