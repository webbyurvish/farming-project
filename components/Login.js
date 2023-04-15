import React, { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import navimage from "../public/images/navbarlogopng.png";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  let emailinputref = useRef();
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
      email: emailinputref.current.value,
      password: passwordInputRef.current.value,
    };
    try {
      const res = await axios.post(
        "https://localhost:44348/api/account/login",
        data
      );

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
    <div>
      <ToastContainer />
      <div className="flex flex-col items-center min-h-[80vh] pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              <Image src={navimage} height={50} width={50} alt="" />
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder="Enter your email here..."
                  type="email"
                  name="email"
                  ref={emailinputref}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder="Enter your password here..."
                  type="password"
                  name="password"
                  ref={passwordInputRef}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/signup"
              >
                Don't have an account yet ?{" "}
                <span className="text-blue-600">Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
