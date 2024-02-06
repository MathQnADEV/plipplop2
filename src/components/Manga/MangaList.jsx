import Image from "next/image";
import Link from "next/link";

const MangaList = ({ api, color }) => {
  return (
    <div
      className={`pb-[4rem] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-7 gap-5 text-${color}`}
    >
      {api.data?.map((manga, index) => {
        return (
          <Link
            href={`/manga/${manga.mal_id}`}
            key={index}
            className="md:w-full flex gap-5 shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          >
            <Image
              src={manga.images.webp.image_url}
              alt={manga.images.jpg.image_url}
              width={350}
              height={350}
              className="md:w-[40%] md:h-full w-[30%]"
              priority={true}
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <p className="pt-2 font-bold md:text-lg text-lg">
                  {manga.title}
                </p>
                <p className="pt-2 font-normal md:text-base text-lg">
                  {manga.status}
                </p>
              </div>
              <div className="bg-gray-600 mt-2 py-2 px-5 rounded-lg text-center text-white">
                {manga.chapters ? `Chapter ${manga.chapters}` : "Cekidot"}                  
                </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MangaList;
