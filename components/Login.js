import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import navimage from "../public/images/navbarlogopng.png";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/slices/authSlice";
import { resetPasswordReset } from "@/slices/forgotPasswordSlice";
import { resetError } from "@/slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);

  console.log(error);

  const isPasswordReset = useSelector(
    (state) => state.forgotPassword.isPasswordReset
  );

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let credentials = {
      email,
      password,
    };

    try {
      dispatch(login(credentials));
      if (error) {
        toast.error(error);
      }
    } catch (e) {
      toast.error(e);
    }

    if (user && user.role === "mentor") {
      router.push("/mentor");
    } else if (user && user.role === "farmer") {
      router.push("/");
    }
  };

  useEffect(() => {
    if (isPasswordReset) {
      toast.success("Password Reset Successfully");
      dispatch(resetPasswordReset());
      dispatch(resetError());
    }
  }, [isPasswordReset, dispatch]);

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col items-center min-h-[80vh] pt-6 sm:justify-center sm:pt-0">
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
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
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
                Don't have an account yet ?
                <span className="text-blue-600">Sign Up</span>
              </Link>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="/resetpassword"
                className="list-none text-sm text-gray-600 underline hover:text-gray-900"
              >
                Forgot Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
