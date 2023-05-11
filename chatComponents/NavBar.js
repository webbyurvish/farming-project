import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../pages/firebase";
import { AuthContext } from "@/slices/authContext";
import { useContext } from "react";

export const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};
