import Image from "next/image";
import Link from "next/link";

const WeeklyFanArt = async ({ api }) => {
  return (
    <div className="grid grid-cols-1 gap-5 pb-[4rem] md:grid-cols-2 md:gap-7 lg:grid-cols-4">
      {api.data.map((fanart, index) => {
        return (
          <Link
            href={`/gallery/${fanart.id}`}
            key={index}
            className="w-full cursor-pointer rounded-lg p-4 shadow-xl duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={fanart.fanart_image}
              width={250}
              height={250}
              alt="fanart"
              className="w-full"
            />
            <p className="pt-2 text-lg font-bold md:text-xl">{fanart.Judul}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default WeeklyFanArt;
