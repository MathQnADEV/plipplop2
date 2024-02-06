// "use client";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/assets/Logos.svg";
// import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import NavMap from "./NavMap";
import { ListHumbergerMenu } from "./ListHumbergerMenu";
import { poppins } from "../Utilities/font";


const Navbar = () => {
  return (
    <header className={`${poppins.className} fixed bg-[#FFB52D] top-0 w-[100%] z-20`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:py-4 py-2">
        <div>
          <Link href="/">
            <Image src={LOGO} alt={"LOGO"} priority={true} className="md:w-30 w-24" />
          </Link>
        </div>
        <NavMap />
        <UserActionButton />
      </div>
      <ListHumbergerMenu />
    </header>
  );
};

export default Navbar;
