import Image from "next/image";
import { image1 } from "../public/images/image.jpg";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";
import navimage from "../public/images/navbarlogopng.png"


export default function Categories() {
  return (
    <>
      <div className="p-2 text-center aspect-[3/4] h-[16rem]">
        <Image className="rounded-3xl object-cover mb-3 w-full" src={navimage} alt="" />
        <div className="px-1">
          <p className="leading-5 font-medium text-base mb-1">handleTitle(data.title)</p>
          <p className="text-xs text-slate-700">data.release_date.substring(0, 4)</p>
        </div>
      </div>

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
