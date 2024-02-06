"use client";
import Image from "next/image";
import Link from "next/link";

const CharactersAnime = ({ datas }) => {
  const charas = datas.data.sort((a, b) => b.favorites - a.favorites);

  return (
    <div className="pb-[4rem] md:w-full md:h-96 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-7 gap-5 overflow-y-scroll">
      {charas.map((chara, index) => {
        const japanVoiceActor = chara.voice_actors.find(
          (voice) => voice.language == "Japanese"
        );
        return (
          <Link
            href={`/anime/${chara.character.mal_id}/characters`}
            key={index}
            className="grid grid-cols-2 gap-5 shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          >
            <Image
              src={chara.character.images.webp.image_url}
              alt={chara.character.images.jpg.image_url}
              width={350}
              height={350}
              // className="md:w-[40%] md:h-full w-[30%]"
              className="w-full"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <p className="pt-2 font-bold md:text-lg text-lg">
                  {chara.character.name}
                </p>
                <p className="pt-2 font-normal md:text-base text-lg">
                  {chara.role}
                </p>
                {japanVoiceActor && (
                  <p className="pt-2 font-normal md:text-base text-lg">
                    actors: {japanVoiceActor.person.name}
                  </p>
                )}
              </div>
              {/* <motion.button
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-600 mt-2 py-2 px-5 rounded-lg text-center text-white"
              >
                Cekidot
              </motion.button> */}
              <div className="bg-gray-600 mt-2 py-2 px-5 rounded-lg text-center text-white">
                Cekidot
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersAnime;
