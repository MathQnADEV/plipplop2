"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimeList = ({ api, color }) => {
  return (
    <div
      className={`pb-[4rem] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-7 gap-5 text-${color}`}
    >
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={index}
            className="md:w-full flex gap-5 shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.images.jpg.image_url}
              width={350}
              height={350}
              className="md:w-[40%] md:h-full w-[30%]"
              // priority={true}
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <p className="pt-2 font-bold md:text-lg text-lg">
                  {anime.title}
                </p>
                <p className="pt-2 font-normal md:text-base text-lg">
                  {anime.status}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-600 mt-2 py-2 px-5 rounded-lg text-center text-white"
              >
                {anime.episodes ? `Episodes ${anime.episodes}` : "Cekidot"}
              </motion.button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
