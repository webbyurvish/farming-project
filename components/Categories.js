import Image from "next/image";
import { image1 } from "../public/images/image.jpg";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";

export default function Categories() {
  return (
    <>
      <div class="flex justify-between m-[10rem]">
        <Link href="/">
          <div className="rounded-full border-8 border-indigo-600 p-5">
            <BsFillPeopleFill />
            <span>Experts</span>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-full border-8 border-indigo-600 p-5">
            {" "}
            <BsFillPeopleFill />
            <span>Forecaster</span>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-full border-8 border-indigo-600 p-5">
            <BsFillPeopleFill />
            <span>Succeed</span>
          </div>
        </Link>
      </div>
    </>
  );
}
