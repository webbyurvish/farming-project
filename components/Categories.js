import Image from "next/image";
import Link from "next/link";
import navimage from "../public/images/navbarlogopng.png";
import agricultureexpert from "../public/images/agriexpert.jpg";
import { Paper, Button } from "@mui/material";
import { API_URL } from "@/config";

export default function Categories({ categories }) {
  console.log(categories);
  return (
    <>
      <div className="flex m-20 justify-between grid grid-cols-3 gap-12">
        {categories &&
          categories.map((category) => {
            return (
              <>
                <Link
                  className=" transition ease-in-out hover:scale-110 duration-300 w-full"
                  href={`/mentorscategory/${category.id}`}
                >
                  {/* <Paper elevation={3} className="m-5 relative transform hover:scale-110 hover:transition hover:duration-500 transform focus:scale-110 transition-all focus:transition focus:duration-500"> */}
                  <Paper elevation={3} className="m-0 w-full relative ">
                    <img
                      src={`${API_URL}${category.imageUrl}`}
                      alt="category image"
                      className=" block w-full h-auto"
                    />
                    <span className="absolute bottom-0 p-2 pl-4 pr-10 text-lg text-white bg-gradient-to-r from-black via-gray-900 via-gray-700 via-gray-500 via-gray-300  to-transparent">
                      {category.name}
                    </span>
                  </Paper>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
}
