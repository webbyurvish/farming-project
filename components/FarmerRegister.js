import Image from "next/image";
import navimage from "../public/images/navbarlogopng.png";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { farmerActions } from "@/slices/farmerSlice";
import { API_URL } from "@/config";

export default function FarmerRegister() {
  const dispatch = useDispatch();
  const isFarmer = useSelector((state) => state.farmer.isFarmer);
  const user = useSelector((state) => state.auth.user);

  const [selectedValue, setSelectedValue] = useState("Agriculture Expert");

  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");
  const [crops, setCrops] = useState("");
  const [experience, setExperience] = useState("");

  console.log(image);

  const router = useRouter();

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (isFarmer) {
      formData.append("FirstName", firstName);
      formData.append("LastName", lastName);
      formData.append("Email", email);
      formData.append("Password", password);
      formData.append("ConfirmPassword", confirmPassword);
      formData.append("PhoneNumber", phoneNumber);
      formData.append("Crops", crops);
      formData.append("Description", description);
      formData.append("ImageFile", image);
    } else {
      formData.append("FirstName", firstName);
      formData.append("LastName", lastName);
      formData.append("Email", email);
      formData.append("Password", password);
      formData.append("ConfirmPassword", confirmPassword);
      formData.append("PhoneNumber", phoneNumber);
      formData.append("Description", description);
      formData.append("ImageFile", image);
      formData.append("CategoryId", selectedValue);
      formData.append("Experience", experience);
    }

    console.log(formData);

    let apiurl = isFarmer ? "farmer" : "mentor";

    try {
      const response = await fetch(`${API_URL}/api/${apiurl}/register`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Registration successfull!");
        e.target.reset();
        router.push("/ogin");
      } else {
        toast.error("Something Went Wrong");
      }
      console.log(response);
    } catch (e) {
      toast.error(e);
    }
  };

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
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                  required
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
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
                  required
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
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
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
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
                  required
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            {/* {isFarmer && (
              <div className="mt-4">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Crops
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="lastname"
                    required
                    onChange={(event) => {
                      setCrops(event.target.value);
                    }}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
            )} */}
            <div className="mt-4">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Description
              </label>
              <div className="flex flex-col items-start">
                <textarea
                  type="text"
                  name="bio"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  required
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>
            </div>
            <div className="mt-4">
              <label
                className="block text-sm font-medium text-gray-700 undefined"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                aria-describedby="file_input_help"
                id="image"
                name="image"
                accept="image/*"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            {!isFarmer && (
              <>
                <div className="mt-4">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Category
                  </label>
                  <div className="relative w-full lg:max-w-sm">
                    <select
                      id="category"
                      value={selectedValue}
                      onChange={handleChange}
                      className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      <option value={1}>Agriculture Expert</option>
                      <option value={2}>Weather Forecaster</option>
                      <option value={3}>Succeed Farmers</option>
                      <option value={4}>Organic Farming Expert</option>
                      <option value={5}>Agricultural Crop Dealer</option>
                      <option value={6}>Agriculture Business Expert</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Experience
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      type="text"
                      name="lastname"
                      onChange={(event) => {
                        setExperience(event.target.value);
                      }}
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
              </>
            )}
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
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
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
                Register
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/login"
              >
                Already registered? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
