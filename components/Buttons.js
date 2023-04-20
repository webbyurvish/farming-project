import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div>
      <div
        className="inline-flex rounded-md shadow-sm justify-center items-center"
        role="group"
      >
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <Link href="/mentorscategory">Find My Mentor</Link>
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <Link href="/">Become a Mentor</Link>
        </button>
      </div>
    </div>
  );
}
