"use client";
import {
  HandCoins,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import LOGOVER from "@/assets/PlipPlopVertical.svg";
import { poppins } from "../Utilities/font";

const Footer = () => {
  return (
    <>
      <div
        className={`${poppins.className} bg-[#333333] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-12`}
      >
        <div className="p-5">
          <Image src={LOGOVER} alt="logover" className="md:w-32 w-28" />
        </div>
        <div className="p-5">
          <ul>
            <li className="text-white font-extrabold text-xl pb-4">
              Tentang Kami
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-[#FFB52D] transition-all">
              Blog
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-[#FFB52D] transition-all">
              Jobs
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-[#FFB52D] transition-all">
              News
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <li className="text-white font-bold text-xl pb-4">Anime</li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-[#FFB52D] transition-all">
              Populer
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-[#FFB52D] transition-all">
              Recomended
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <li className="text-white font-bold text-xl pb-4">Manga</li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-[#FFB52D] transition-all">
              Populer
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-[#FFB52D] transition-all">
              Recomended
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <li className="text-white font-bold text-xl pb-4">
              Terhubung Dengan Kami
            </li>
            <li className="flex gap-6 pb-5">
              <InstagramLogo
                size={32}
                className="text-2xl text-white cursor-pointer hover:text-[#FFB52D] transition-all"
              />
              <TwitterLogo
                size={32}
                className="text-2xl text-white cursor-pointer hover:text-[#FFB52D] transition-all"
              />
              <LinkedinLogo
                size={32}
                className="text-2xl text-white cursor-pointer hover:text-[#FFB52D] transition-all"
              />
              <YoutubeLogo
                size={32}
                className="text-2xl text-white cursor-pointer hover:text-[#FFB52D] transition-all"
              />
            </li>
            <li className="text-white font-bold text-xl pb-4 mt-4">
              Ingin Berdonasi?
            </li>
          </ul>
          <Link
            href="/"
            className="bg-[#FFB52D] text-white flex justify-center items-center gap-2 rounded-lg p-2"
          >
            <HandCoins size={29} />
            Berdonasi
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h1 className="text-gray-800 font-semibold">
          © 2022-2023 All rights reserved | Build with gg peformance by{" "}
          <span className="hover:text-[#FFB52D] transition-all font-semibold cursor-pointer">
            PlipPlop
          </span>{" "}
        </h1>
      </div>
    </>
  );
};

export default Footer;
