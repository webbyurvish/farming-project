import Image from "next/image";
import { image1 } from "../public/images/image.jpg";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";
import navimage from "../public/images/navbarlogopng.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "@/slices/categorySlice";

export default function Categories() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.data);
  const isLoading = useSelector((state) => state.category.isLoading);

  // Trigger the `fetchCategories()` action only if categories are not already available in the store
  if (!categories) {
    dispatch(fetchCategories());
  }

  console.log(categories);

  return (
    <>
      <div className="flex m-20 justify-between grid grid-cols-3 gap-4">
        {categories &&
          categories.map((category) => {
            return (
              <div
                key={category.id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={navimage}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {category.id}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.name}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link
                      href={`/mentorscategory/${category.id}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Show mentors
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
