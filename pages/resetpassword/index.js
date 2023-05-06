import Layout from "@/components/Layout";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import navimage from "../../public/images/navbarlogopng.png";
import {
  sendForgotPasswordRequest,
  sendForgotPasswordRequestSuccess,
  resetIsEmailSent,
} from "@/slices/forgotPasswordSlice";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle, Button, Box } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export default function index() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const isEMailSent = useSelector((state) => state.forgotPassword.isEmailSent);
  console.log(isEMailSent);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(sendForgotPasswordRequest(email));
    dispatch(sendForgotPasswordRequestSuccess());
  };

  useEffect(() => {
    return () => {
      dispatch(resetIsEmailSent());
    };
  }, []);

  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center min-h-[80vh] pt-6 sm:justify-center sm:pt-0">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-purple-600">
                <Image src={navimage} height={50} width={50} alt="" />
              </h3>
            </a>
          </div>

          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <ToastContainer />
            {isEMailSent && (
              <Alert severity="success">
                <AlertTitle> Mail Has been sent</AlertTitle>
                For reset password - <strong>check it out!</strong>
              </Alert>
            )}

            {!isEMailSent && (
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
                      required
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                  >
                    Forgot Password
                  </button>
                </div>
              </form>
            )}
            <Link href="/login">
              <Box textAlign="center">
                <Button variant="contained">Back To Login</Button>
              </Box>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
