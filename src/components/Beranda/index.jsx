"use client";
import IconPeng2 from "@/assets/IconPeng2.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { poppins } from "../Utilities/font";

const Beranda = () => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: "-100px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const textHeroVariants1 = {
    hidden: {
      opacity: 0,
      x: "100px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.5,
      },
    },
  };
  const textHeroVariants2 = {
    hidden: {
      opacity: 0,
      x: "100px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.6,
      },
    },
  };

  return (
    <div className="h-screen flex items-center relative">
      <div className="container mx-auto z-10">
        <div className="absolute inset-0">
          <Image
            src="/PPStart.png"
            alt="Background image"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="relative z-10 flex flex-wrap justify-center md:gap-10 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:block w-auto hidden"
          >
            <Image src={IconPeng2} width="650" alt="icon" priority={true} />
          </motion.div>

          <div
            className={`${poppins.className} max-w-[600px] text-white flex flex-col`}
          >
            <motion.div
              variants={textHeroVariants1}
              initial="hidden"
              animate="visible"
            >
              <div>
                <h1 className="md:text-4xl lg:text-5xl text-2xl  text-[#FFC522] font-bold tracking-wider">
                  Selamat Datang Di
                </h1>
              </div>
              <div>
                <h1 className="md:text-7xl lg:text-9xl text-6xl font-extrabold tracking-tighter">
                  Plip Plop
                </h1>
              </div>
            </motion.div>
            <motion.div
              variants={textHeroVariants2}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-[#FFC522] h-2 w-52 md:mt-16 mt-10 md:mb-2 mb-1"></div>
              <p className="md:text-3xl lg:text-5xl text-2xl font-semibold">
                <span className="md:text-5xl lg:text-7xl text-4xl font-extrabold text-[#FFC522]">
                  Sama
                  <span className="md:text-5xl lg:text-4xl text-lg">2 </span>
                </span>
                berkarya
              </p>
              <p className="md:text-3xl lg:text-5xl text-2xl font-semibold">
                <span className="md:text-5xl lg:text-7xl text-4xl font-extrabold text-[#FFC522]">
                  Sama
                  <span className="md:text-5xl lg:text-4xl  text-lg">2 </span>
                </span>
                berjaya
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
