import Image from "next/image";
import navimage from "../public/images/navbarlogopng.png";
import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const router = useRouter();
  let firstnameinputref = useRef();
  let lastnameinputref = useRef();
  let emailinputref = useRef();
  let passwordInputRef = useRef();
  let confirmpasswordinputref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstname: firstnameinputref.current.value,
      lastname: lastnameinputref.current.value,
      email: emailinputref.current.value,
      password: passwordInputRef.current.value,
      confirmpassword: confirmpasswordinputref.current.value,
    };

    try {
      //   const res = await axios.post(
      //     "https://localhost:44348/api/account/signup",
      //     data
      //   );

      const response = await fetch(
        "https://localhost:44348/api/account/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Registration successfull!");
        e.target.reset();
        router.push("/");
      } else {
        toast.error("Something Went Wrong");
      }
      console.log(response);
    } catch (e) {
      toast.error("Something Went Wrong");
    }
  };

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
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                FirstName
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="firstname"
                  ref={firstnameinputref}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                LastName
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="lastname"
                  ref={lastnameinputref}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
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
                  type="password"
                  name="password"
                  ref={passwordInputRef}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  ref={confirmpasswordinputref}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Register
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/login"
              >
                Already registered?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
