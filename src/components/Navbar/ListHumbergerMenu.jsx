"use client";
import { List, X } from "@phosphor-icons/react";
import { ICON_ONNAV, NAVLINK } from "../constant";
import { useState } from "react";
import Link from "next/link";

export const ToogleHumbergerMenu = ({ toggle, setToggle }) => {
  return (
    <div className="w-full flex justify-end items-center absolute top-3 end-1 text-white">
      {toggle ? (
        <X onClick={() => setToggle(false)} size={30} className="md:hidden" />
      ) : (
        <List onClick={() => setToggle(true)} size={30} className="md:hidden" />
      )}
    </div>
  );
};

export const HumbergerMenu = ({toggle}) => {
  return (
    <div
      className={`duration-300 md:hidden flex flex-col w-[65%] h-screen fixed bg-black/60 text-white ${
        toggle ? `left-0` : `left-[-100%]`
      }`}
    >
      {NAVLINK.map((menu, index) => {
        return (
          <li
            key={index}
            className="cursor-pointer hover:text-[#FFB52D] transition-all p-5 list-none"
          >
            {menu.name}
          </li>
        );
      })}
      <div className="flex flex-col gap-5 items-center mt-20">
        <div className="bg-[#FFB52D] w-[250px] h-[1.5px]"></div>
        <div className="flex gap-9">
          {ICON_ONNAV.map((data, index) => {
            return (
              <Link href={data.link} target="_blank" key={index}>
                <data.icon
                  size={25}
                  className="text-[#FFB52D] hover:-translate-y-1.5 duration-300 cursor-pointer"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ListHumbergerMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <ToogleHumbergerMenu toggle={toggle} setToggle={setToggle}/>
      <HumbergerMenu toggle={toggle}/>
    </div>
  )
}
