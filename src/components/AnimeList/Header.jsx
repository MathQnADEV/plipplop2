"use client";
import { CaretDoubleRight } from "@phosphor-icons/react";
import Link from "next/link";

const Header = ({ title, color, linkHref, linkTitle }) => {
  return (
    <>
      <div
        className={`py-8 text-center text-3xl font-bold md:py-[4rem] md:text-4xl lg:text-5xl text-${color}`}
      >
        <h1>{title}</h1>
      </div>
      <div className="flex items-center justify-end text-white md:-mt-10 md:mb-10">
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="text-md flex text-white underline transition-all hover:text-black md:text-xl"
          >
            {linkTitle}
            <CaretDoubleRight size={32} />
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
