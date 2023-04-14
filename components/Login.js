import React, { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  let emailInputref = useRef();
  let passwordInputRef = useRef();

  const router = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login();
  // };

  // async function login() {
  //   const response = await fetch("https://localhost:7295/api/books");
  //   const data = await response.json();

  //   console.log(data);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailInputref.current.value,
      password: passwordInputRef.current.value,
    };
    try {
      const res = await axios.post(
        "https://localhost:7295/api/account/login",
        data
      );
      // console.log(res.data);
      console.log(res);
      const jwttoken = await res.data;
      console.log(jwttoken);
      Cookies.set("jwt", jwttoken, { expires: 1 });
      if (res.status === 200) {
        router.push("/");
      }
    } catch (e) {
      alert(e);
    }
  };

  function logout() {
    Cookies.remove("jwt");
  }

  async function getbook() {
    const response = await fetch("https://localhost:7295/api/books", {
      method: "GET",
      headers: { Authorization: "Bearer " + Cookies.get("jwt") },
    });

    const books = await response.json();

    if (response.ok) {
      console.log(books);
    } else {
      console.log(response);
    }
  }

  // async function login() {
  //   const data = {
  //     email: emailInputref.current.value,
  //     password: passwordInputRef.current.value,
  //   };

  //   const response = await fetch("https://localhost:7295/api/account/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const tokendata = await response.json();
  //   console.log(tokendata);
  // }

  // const login = async () => {
  //   const data = {
  //     email: emailInputref.current.value,
  //     password: passwordInputRef.current.value,
  //   };
  //   const response = await fetch("https://localhost:7295/api/account/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   console.log(response);

  //   const data1 = await response.json();
  //   console.log(data1);

  //   // console.log(res);

  //   if (response.ok) {
  //     // console.log(data1);
  //     // Cookies.set("jwt", data.jwt);
  //     // console.log(Cookies.get("jwt"));
  //     // setUser(data.user);
  //     // router.push("/account/dashboard");
  //   } else {
  //     return;
  //     // setError(data.error.message);
  //     // console.log(data.error.message);
  //     // setError(null);
  //   }
  // };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Sign in
        </h1>
        <button onClick={logout}>Log Out</button>
        <button onClick={getbook}>get books</button>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              ref={emailInputref}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              ref={passwordInputRef}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
