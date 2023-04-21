import Image from "next/image";
import navimage from "../public/images/navbarlogopng.png";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { farmerActions } from "@/slices/farmerSlice";

export default function FarmerRegister() {
  const router = useRouter();
  let firstnameinputref = useRef();
  let lastnameinputref = useRef();
  let emailinputref = useRef();
  let phoneInputRef = useRef();
  let passwordInputRef = useRef();
  let confirmpasswordinputref = useRef();
  let bioinputref = useRef();

  // const [isFarmer, setIsFarmer] = useState(true);
  const dispatch = useDispatch();
  const isFarmer = useSelector((state) => state.farmer.isFarmer);

  const [selectedValue, setSelectedValue] = useState("Agriculture Expert");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = isFarmer
      ? {
          firstname: firstnameinputref.current.value,
          lastname: lastnameinputref.current.value,
          email: emailinputref.current.value,
          password: passwordInputRef.current.value,
          confirmpassword: confirmpasswordinputref.current.value,
          phonenumber: phoneInputRef.current.value,
        }
      : {
          firstname: firstnameinputref.current.value,
          lastname: lastnameinputref.current.value,
          email: emailinputref.current.value,
          password: passwordInputRef.current.value,
          phonenumber: phoneInputRef.current.value,
          confirmpassword: confirmpasswordinputref.current.value,
          bio: bioinputref.current.value,
          category: selectedValue,
        };

    let apiurl = isFarmer ? "signup" : "signup/mentor";

    try {
      const response = await fetch(
        `https://localhost:44348/api/account/${apiurl}`,
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
        <div>
          <p className="font-bold">ACCOUNT TYPE</p>

          <button
            onClick={() => {
              dispatch(farmerActions.setFarmer());
            }}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            FARMER
          </button>

          <button
            onClick={() => {
              dispatch(farmerActions.setMentor());
            }}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            MENTOR
          </button>
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
                htmlFor="phonenumber"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Phone Number
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="tel"
                  name="phonenumber"
                  ref={phoneInputRef}
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
            {!isFarmer && (
              <>
                <div className="mt-4">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    category
                  </label>
                  <div className="relative w-full lg:max-w-sm">
                    <select
                      id="category"
                      value={selectedValue}
                      onChange={handleChange}
                      className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      <option value="Agriculture Expert">
                        Agriculture Expert
                      </option>
                      <option value="Weather Forecaster">
                        Weather Forecaster
                      </option>
                      <option value="Succeed Farmers">Succeed Farmers</option>
                      <option value="Organic Farming Expert">
                        Organic Farming Expert
                      </option>
                      <option value="Agricultural Crop Dealer">
                        Agricultural Crop Dealer
                      </option>
                      <option value="Agriculture Business Expert">
                        Agriculture Business Expert
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Bio
                  </label>
                  <div className="flex flex-col items-start">
                    <textarea
                      type="text"
                      name="bio"
                      ref={bioinputref}
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    ></textarea>
                  </div>
                </div>
              </>
            )}

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
