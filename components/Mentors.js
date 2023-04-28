import React from "react";
import { useCallback } from "react";
import navimage from "../public/images/navbarlogopng.png";
import Image from "next/image";
import { fetchMentors } from "@/slices/mentorSlice";
import { resetMentors } from "@/slices/mentorSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "./Layout";
import Link from "next/link";

export default function ({ categoryId }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mentor.data);

  const categoryid = categoryId.categoryId;

  useEffect(() => {
    dispatch(fetchMentors(categoryid));
    return () => {
      dispatch(resetMentors());
    };
  }, []);

  console.log(data);
  return (
    <>
      <div className="flex style={{marginBottom: '-2rem'} m-20 mt-[7rem] justify-between grid grid-cols-3 gap-3">
        {data &&
          data.map((mentor) => {
            return (
              <div className="mx-5 min-h-min place-content-center">
                <div className="bg-gradient-to-r from-green-400 to-emerald-700 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                  <h1 className="text-3xl mb-3">Hi George</h1>
                  <p className="text-lg">
                    You can contact us whenever you need help or just curious
                    about something.
                  </p>
                </div>
                <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                  <h2 className="font-semibold text-2xl mb-6">
                    Start chatting
                  </h2>
                  <img
                    className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                    src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="User avatar"
                  />
                  <p className="capitalize text-xl mt-1">essie walton</p>
                  <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
                    <div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
                    Active
                  </span>
                  <button className="rounded-md bg-blue-900 text-xl text-white pt-3 pb-4 px-8 inline">
                    <Link href={`/mentorscategory/${categoryid}/${mentor.id}`}>
                      View Profile
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
