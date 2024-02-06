import Page from "@/app/not-found";
import CharactersManga from "@/components/Manga/CharactersManga";
import InformationManga from "@/components/Manga/InformationManga";
import MangaList from "@/components/Manga/MangaList";
import { poppins } from "@/components/Utilities/font";
import { getMangaResponse, getNestedMangaResponse, reproduce } from "@/libs/api-libs";
import Image from "next/image";
import React from "react";

const page = async ({ params: { id } }) => {
  const manga = await getMangaResponse(`manga/${id}`);
  const mangaCharacters = await getMangaResponse(`manga/${id}/characters`);

  let recomendedManga = await getNestedMangaResponse(
    "recommendations/anime",
    "entry"
  );

  recomendedManga = reproduce(recomendedManga, 4);

  // console.log(manga);

  return (
    <>
      {manga.message === "Resource does not exist" ? (
        <Page />
      ) : (
        <div
          className={`${poppins.className} bg-[url('/PPbgWhite.png')] bg-cover bg-center bg-fixed relative`}
        >
          <div className="md:mt-[72px] mt-3">
            <Image
              src={manga.data.images.webp.large_image_url}
              alt={manga.data.images.jpg.large_image_url}
              width={250}
              height={250}
              className="w-full md:h-72 object-cover"
            />
          </div>
          <div className="container mx-auto py-4 px-16 -mt-52 relative">
            <div className="bg-white px-16 rounded-lg shadow-xl">
              <div className="pt-4 px-4 grid grid-cols-2 sm:flex-nowrap  text-black ">
                <Image
                  src={manga.data.images.webp.large_image_url}
                  alt={manga.data.images.jpg.large_image_url}
                  width={350}
                  height={350}
                  className=" w-4/6 rounded "
                />
                <div className="flex flex-col justify-between -ml-32">
                  <h1 className="font-bold text-4xl mt-5">
                    {manga.data.title}
                  </h1>
                  <div>
                    <div className="flex flex-row gap-5 mb-5">
                      {manga.data.genres.map((genre, index) => {
                        return (
                          <p key={index} className="text-2xl font-medium">
                            {genre.name}
                          </p>
                        );
                      })}
                    </div>
                    <p className="text-md text-justify">
                      {manga.data.synopsis}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFC522] mx-8 py-0.5 my-14" />
              <div className="pb-5">
                <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center pb-14">
                  Character
                </h1>
                <CharactersManga datas={mangaCharacters} />
              </div>
              <div className="bg-[#FFC522] mx-8 py-0.5 my-14" />
              <div className="pb-20 mb-16">
                <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center pb-14">
                  Information
                </h1>
                <InformationManga datas={manga} />
              </div>
            </div>
          </div>
          <section className="w-full mx-auto lg:px-12 px-6">
            <h1 className="font-bold text-4xl mb-10">Rekomendasi Manga</h1>
            <MangaList api={recomendedManga} color="black" />
          </section>
        </div>
      )}
    </>
  );
};

export default page;
