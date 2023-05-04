import Layout from "@/components/Layout";
import React from "react";
import { useSelector } from "react-redux";
import Chat from "@/components/Chat";

export default function index() {
  const mentor = useSelector((state) => state.auth.user);
  const mentee = useSelector((state) => state.singlementor.data);

  return (
    <Layout>
      <Chat currentUser={4} otherUser={1} />
    </Layout>
  );
}
