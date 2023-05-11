import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../pages/firebase";

export const Login = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      setErr(true);
      //   setLoading(false);
    }
  };

  return (
    <div>
      {" "}
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Lama Chat</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />

            <button>Sign in</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>You don't have an account? Register</p>
        </div>
      </div>
    </div>
  );
};
