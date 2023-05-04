import React from "react";
import { useEffect } from "react";
import navimage from "../public/images/profile.jpg";
import Image from "next/image";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchmentor } from "@/slices/singleMentorSlice";
import { resetMentors } from "@/slices/singleMentorSlice";
import Link from "next/link";

export default function MentorProfile({ mentorId }) {
  const dispatch = useDispatch();
  const mentor = useSelector((state) => state.singlementor.data);

  console.log(mentorId);

  useEffect(() => {
    dispatch(fetchmentor(mentorId));
    return () => {
      dispatch(resetMentors());
    };
  }, []);

  console.log(mentor);

  return (
    <>
      {mentor && (
        <div>
          <div className="relative bg-indigo-950">
            <div className="max-w-screen-xl mx-auto">
              <div className="-mt-12 w-full lg:w-1/2 xl:w-2/3 px-4 pb-8 align-bottom flex items-end">
                <div className="inline-block w-48 h-48 relative top-20 rounded-full overflow-hidden bg-white p-1 flex-none">
                  <Image
                    className="w-full h-full rounded-full"
                    src={navimage}
                    alt="Bonnie image"
                  />
                </div>
                <div className="hidden sm:inline-block ml-6 grow">
                  <div className="flex items-end gap-x-4">
                    <div>
                      <a
                        href="https://mentorcruise.com/top/"
                        target="_blank"
                        className="tag-white flex justify-center"
                      >
                        <span className="flex  bg-green-100 text-black-800 text-x font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-black-300">
                          <span className="mr-2 self-center inline-block ">
                            <AiFillStar size={20} />
                          </span>{" "}
                          Top Mentor
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <div className="w-full lg:w-1/2 xl:w-2/3 relative pt-20">
              <div className="sm:grid sm:grid-cols-2 gap-x-8 px-4 sm:px-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {mentor.firstName + " " + mentor.lastName}
                  </h2>
                  <span className="inline-block font-medium text-slate-900 text-md leading-normal">
                    <a
                      className="text-slate-900"
                      href="https://mentorcruise.com/become/product-leadership-coach-ex-director-of-product/"
                    >
                      Product Leadership Coach (ex-Director of Product)
                    </a>
                    <span>@</span>
                    ex-ServiceNow, ex-Yandex
                  </span>
                  <br />
                  <span className="inline-block font-medium text-teal-700 text-md leading-normal mt-[2px]">
                    15 years in tech | Helping product leaders go from
                    overwhelmed to empowered
                  </span>
                  <div className="mt-5 font-normal text-slate-600">
                    <span className="block mb-2">
                      <a
                        href="https://mentorcruise.com/country/us/"
                        className=" text-slate-600 flex"
                      >
                        <svg
                          className="w-5 h-5 text-teal-600 align-sub mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>United States of America</span>
                      </a>
                    </span>
                    <span className="block mb-2 flex">
                      <svg
                        className="w-5 h-5 text-teal-600 align-sub mr-1 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="flex">
                        5.0 (
                        <a
                          onclick="if (!window.__cfRLUnblockHandlers) return false; document.querySelector('#reviews').scrollIntoView({ behavior: 'smooth'});"
                          className="text-slate-600 underline "
                          data-cf-modified-aa97106c811f940bdd2a74d1-=""
                        >
                          16 reviews
                        </a>
                        )
                      </span>
                    </span>
                    <span className="block mb-2 flex">
                      <svg
                        className="w-5 h-5 text-teal-600 align-sub mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Active today</span>
                    </span>
                    <span className="block mb-2 flex">
                      <svg
                        className="w-5 h-5 text-teal-600 align-sub mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Usually responds
                      <span
                        className="underline tooltip is-tooltip-top is-tooltip-multiline"
                        data-tooltip="This is how quickly Anna usually responds to applications."
                      >
                        in a few hours
                      </span>
                    </span>
                  </div>
                  <div className="mt-5 flex gap-x-4">
                    <div
                      className="white-btn bg-gray-300 font-semibold hover:bg-gray-500 border px-[15px] py-[7px] small text-sm flex"
                      onclick="if (!window.__cfRLUnblockHandlers) return false; $('#introvideo').addClass('is-active')"
                      data-cf-modified-aa97106c811f940bdd2a74d1-=""
                    >
                      <div className="mr-1">
                        <BiMessageRoundedDetail size={20} />
                      </div>
                      Send Message
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="mb-5">
                    <h3 className="text-slate-900 font-semibold mb-2">
                      Skills
                    </h3>

                    <a
                      href="#"
                      className="text-base rounded-full mb-3 mr-3 py-1 px-6 text-base font-medium
                  bg-slate-200 inline-block border hover:bg-slate-300 hover:text-black"
                    >
                      Leadership
                    </a>
                    <a
                      href="#"
                      className="text-base rounded-full mb-3 mr-3 py-1 px-6 text-base font-medium
                  bg-slate-200 inline-block border hover:bg-slate-300 hover:text-black"
                    >
                      Product Management
                    </a>
                    <a
                      href="#"
                      className="text-base rounded-full mb-3 mr-3 py-1 px-6 text-base font-medium
                  bg-slate-200 inline-block border hover:bg-slate-300 hover:text-black"
                    >
                      Product Strategy
                    </a>
                  </div>
                  <h3 className="text-slate-900 font-semibold mb-2">Topics</h3>
                  <a
                    href="#"
                    className="text-base rounded-full mb-3 mr-3 py-1 px-6 text-base font-medium
                  bg-slate-200 inline-block border hover:bg-slate-300 hover:text-black"
                  >
                    Leadership
                  </a>
                  <a
                    href="#"
                    className="text-base rounded-full mb-3 mr-3 py-1 px-6 text-base font-medium
                  bg-slate-200 inline-block border hover:bg-slate-300 hover:text-black"
                  >
                    Product Management
                  </a>
                  <a
                    href="#"
                    className="text-base rounded-full mb-3 mr-3 py-1 px-6 text-base font-medium
                  bg-slate-200 inline-block border hover:bg-slate-300 hover:text-black"
                  >
                    Product Management
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-12" />
          <div className="max-w-screen-xl mx-auto ">
            <div className="w-full lg:w-1/2 xl:w-2/3 relative py-4 px-4 sm:px-8">
              <div>
                <div
                  className="my-8 lg:my-0 w-full sm:w-[420px] lg:left-[55%] xl:left-2/3 top-32 lg:fixed"
                  id="sticky-float"
                >
                  <div
                    className="p-8 sm:p-0 w-full h-fit mb-6 display-none"
                    id="featured-call"
                  ></div>
                  <div
                    className="p-8 sm:p-0 w-full h-fit mb-6 display-none"
                    id="featured-inquiry"
                  ></div>

                  <div className="modal content" id="sessions">
                    <div
                      className="modal-background"
                      onclick="if (!window.__cfRLUnblockHandlers) return false; $('#sessions').removeClass('is-active');"
                      data-cf-modified-aa97106c811f940bdd2a74d1-=""
                    ></div>
                    <div className="modal-card w-full max-w-screen-lg"></div>
                    <button
                      className="modal-close is-large"
                      onclick="if (!window.__cfRLUnblockHandlers) return false; $('#sessions').removeClass('is-active');"
                      aria-label="close"
                      data-cf-modified-aa97106c811f940bdd2a74d1-=""
                    ></button>
                  </div>
                  <div
                    className="p-8 sm:p-0 w-full h-fit display-none"
                    id="plan-float-b"
                    x-data="planSwitcher()"
                    x-init="init()"
                  >
                    <div className="block rounded-2xl bg-white border-2 border-solid border-slate-300 overflow-hidden">
                      <div className="inline-block w-full"></div>
                      <div x-show="offer == 'mentorship'">
                        <div className="block">
                          <div
                            className="plan-details display-none"
                            x-show="plan == 'lite'"
                          ></div>
                          <div
                            className="plan-details"
                            x-show="plan == 'standard'"
                          >
                            <div className="px-6 pt-6 pb-4">
                              <p className="text-4xl font-extrabold text-slate-900">
                                <span className="price-element">$450</span>{" "}
                                <span className="text-xl">/ month</span>
                              </p>
                              <div className="mt-2 text-slate-900">
                                The most popular way to get mentored, let&#39;s
                                work towards your goals!
                              </div>
                              <div className="mt-4 text-slate-900">
                                <p className="mb-2 flex">
                                  <svg
                                    className="w-5 h-5 mr-1 align-sub text-teal-600 inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  <a
                                    href="https://mentorcruise.com/top/"
                                    className="text-slate-900"
                                  >
                                    Top Mentor
                                  </a>
                                </p>
                                <p className="mb-2 flex">
                                  <svg
                                    className="w-5 h-5 mr-1 align-sub text-teal-600 inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Up to 2 calls per month
                                </p>
                                <p className="mb-2 flex">
                                  <svg
                                    className="w-5 h-5 mr-1 align-sub text-teal-600 inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  <span>Unlimited</span>
                                  Q&A via chat
                                </p>
                                <p className="mb-2 cursor-pointer flex">
                                  <svg
                                    className="w-5 h-5 mr-1 align-sub text-teal-600 inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Expect responses{" "}
                                  <span
                                    className="underline tooltip is-tooltip-top is-tooltip-multiline"
                                    data-tooltip="This is how quickly Anna will respond to your chat messages during the mentorship."
                                  >
                                    in 24 hours or less
                                  </span>
                                </p>
                                <p className="mb-2 cursor-pointer flex">
                                  <svg
                                    className="w-5 h-5 mr-1 align-sub text-teal-600 inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                    `
                                  </svg>
                                  Tasks & exercises
                                </p>
                                <p className="mb-2 cursor-pointer flex">
                                  <svg
                                    className="w-5 h-5 mr-1 align-sub text-teal-600 inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Flat fee, no hidden costs
                                </p>
                                <p className="mb-2 cursor-pointer flex">
                                  <svg
                                    className="w-5 h-5 mr-1 align-sub text-teal-600 inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  7 day free trial! Cancel anytime.
                                </p>
                              </div>
                              <div className="mt-8 flex items-center">
                                <Link
                                  href="/chat"
                                  className="text-white w-full bg-teal-500 text-center rounded px-[6rem] py-3 hover:bg-teal-700 font-semibold duration-700"
                                >
                                  Communicate Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-slate-900 font-bold text-2xl mb-5" id="bio">
                  About
                </h2>
                <div className="ugc">
                  <div className="inline-block">
                    <div
                      className=" text-black overflow-hidden leading-normal"
                      id="bio-truncated"
                    >
                      <p>{mentor.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-12" />
          </div>
        </div>
      )}
    </>
  );
}
