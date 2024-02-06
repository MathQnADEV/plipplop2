import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import { poppins } from "@/components/Utilities/font";
import VideoPlayerNew from "@/components/Utilities/VideoPlayerNew";
import CharactersAnime from "@/components/AnimeList/CharactersAnime";
import InformationAnime from "@/components/AnimeList/InformationAnime";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const animeCharacters = await getAnimeResponse(`anime/${id}/characters`);
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
          src={anime.data.images.webp.large_image_url}
          alt={anime.data.images.jpg.large_image_url}
          width={250}
          height={250}
          className="w-full md:h-72 object-cover"
        />
      </div>
      <div className="container mx-auto py-4 px-16 -mt-52 relative">
        <div className="bg-white px-16 rounded-lg shadow-xl">
          <div className="pt-4 px-4 grid grid-cols-2 sm:flex-nowrap  text-black ">
            <Image
              src={anime.data.images.webp.large_image_url}
              alt={anime.data.images.jpg.large_image_url}
              width={350}
              height={350}
              className=" w-4/6 rounded "
            />
            <div className="flex flex-col justify-between -ml-32">
              <h1 className="font-bold text-4xl mt-5">{anime.data.title}</h1>
              <div>
                <div className="flex flex-row gap-5 mb-5">
                  {anime.data.genres.map((genre, index) => {
                    return (
                      <p key={index} className="text-2xl font-medium">
                        {genre.name}
                      </p>
                    );
                  })}
                </div>
                <p className="text-md text-justify">{anime.data.synopsis}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFC522] mx-8 py-0.5 my-10" />
          <div className="pb-5">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center pb-10">
              Trailer
            </h1>
            <div className="md:block">
              <VideoPlayerNew youtubeID={anime.data.trailer.youtube_id} />
            </div>
            <div className="md:hidden">
              <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
            </div>
          </div>
          <div className="bg-[#FFC522] mx-8 py-0.5 my-14" />
          <div className="pb-5">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center pb-14">
              Character
            </h1>
            <CharactersAnime datas={animeCharacters} />
          </div>
          <div className="bg-[#FFC522] mx-8 py-0.5 my-14" />
          <div className="pb-20 mb-16">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center pb-14">
              Information
            </h1>
            <InformationAnime datas={anime} />
          </div>
        </div>
      </div>
      <section className="w-full mx-auto lg:px-12 px-6">
        <h1 className="font-bold text-4xl mb-10">Rekomendasi Anime</h1>
        <AnimeList api={recomendedAnime} color="black" />
      </section>
    </div>
  );
};

export default Page;
