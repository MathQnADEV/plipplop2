"use client"
import Link from "next/link";
import { NAVLINK } from "../constant";

const NavMap = () => {
  return (
    <div className="hidden md:flex  tracking-wider gap-8">
      {NAVLINK.map((menu, index) => {
        return (
          <Link
            key={index}
            href={menu.path}
            className="cursor-pointer list-none"
          >
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavMap;
