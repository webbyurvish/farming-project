import React, { useContext } from "react";
import { Home } from "@/chatComponents/Home";
import { Register } from "@/chatComponents/Register";
import { Login } from "@/chatComponents/Login";
import { AuthContext } from "@/slices/authContext";

export default function index() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Register />
      {!currentUser && <Login />}
      {currentUser && <Home />}
    </div>
  );
}
