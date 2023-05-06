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
      <div className="flex m-20 justify-between grid grid-cols-3 gap-4">
        {categories &&
          categories.map((category) => {
            return (
              <>
                <Link href={`/mentorscategory/${category.id}`}>
                  <Paper elevation={3}>
                    <div className="flex flex-col items-center">
                      {/* <Image
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={`https://localhost:7059${category.imageUrl}`}
                      alt="Bonnie image"
                      width={50}
                      height={50}
                    /> */}
                      <img
                        src={`https://localhost:7059${category.imageUrl}`}
                        alt="category image"
                      />
                      {/* <span className="text-sm text-gray-500 dark:text-gray-400">
                        {category.name}
                      </span> */}
                      {/* <div className="flex mt-4 space-x-3 md:mt-6"></div> */}
                    </div>
                  </Paper>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
}
