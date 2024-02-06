import Fanart from "@/assets/layoutFanart.png";
import AnimeList from "@/components/AnimeList";
import { poppins } from "@/components/Utilities/font";
import {
  getFanartResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";
import Image from "next/image";

const page = async ({ params: { id } }) => {
  const fanart = await getFanartResponse(`fanart/${id}`);
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 4);
  return (
    <div
      className={`${poppins.className} bg-[url('/PPbgWhite.png')] bg-cover bg-center bg-fixed relative`}
    >
      <div className="md:mt-[72px] mt-3">
        <Image
          src={fanart.fanart_image}
          alt={"..."}
          width={250}
          height={250}
          className="w-full md:h-72 object-cover"
        />
      </div>
      <div className="container mx-auto py-4 px-16 -mt-52 relative">
        <div className="bg-white px-16 rounded-lg shadow-xl">
          <div className="pt-4 px-4 grid grid-cols-2 sm:flex-nowrap  text-black ">
            <Image
              src={fanart.fanart_image}
              alt={"..."}
              width={350}
              height={350}
              className=" w-4/6 rounded "
            />
            <div className="flex flex-col justify-between -ml-32">
              <h1 className="font-bold text-4xl mt-5">{fanart.Judul}</h1>
              <div>
                  <p className="text-xl font-medium mb-5">
                    <span className="font-bold text-2xl">Made By: </span>
                    {fanart.authors}
                  </p>
                <p className="text-md text-justify">{fanart.description}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFC522] mx-8 py-0.5 my-10" />
        </div>
      </div>
      <section className="w-full mx-auto lg:px-12 px-6">
        <h1 className="font-bold text-4xl mb-10">Rekomendasi Anime</h1>
        <AnimeList api={recomendedAnime} color="black" />
      </section>
    </div>
  );
};

export default page;
