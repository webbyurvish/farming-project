import React from "react";
import Chat from "@/components/Chat";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";

const ChatPage = () => {
  const mentee = useSelector((state) => state.auth.user);
  const mentor = useSelector((state) => state.singlementor.data);

  return (
    <Layout>
      <Chat currentUser={mentee.id} otherUser={mentor.id} />
    </Layout>
  );
};

export default ChatPage;
