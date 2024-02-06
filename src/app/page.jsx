import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Beranda from "@/components/Beranda";
import MangaList from "@/components/Manga/MangaList";
import { poppins } from "@/components/Utilities/font";
import WeeklyFanArt from "@/components/WeeklyFanArt";
import {
  getAnimeResponse,
  getFanartResponse,
  getMangaResponse,
  getNestedAnimeResponse,
  getNestedMangaResponse,
  reproduce,
} from "@/libs/api-libs";
import Image from "next/image";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=4");
  const topManga = await getMangaResponse("top/manga", "limit=4");
  const fanarts = await getFanartResponse("fanart");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry",
  );
  let recomendedManga = await getNestedMangaResponse(
    "recommendations/anime",
    "entry",
  );
  recomendedAnime = reproduce(recomendedAnime, 4);
  recomendedManga = reproduce(recomendedManga, 4);

  return (
    <>
      <Beranda />
      {/* start Anime Terpopuler */}
      <section
        className={`${poppins.className} relative mx-auto w-full px-6 lg:px-16`}
      >
        <div className="absolute inset-0">
          <Image
            src="/PPbg2.png"
            alt="Background image"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="relative z-10">
          <Header
            title="Anime Populer"
            linkTitle="Lihat Semua"
            linkHref="/animePopuler"
            color="white"
          />
          <AnimeList api={topAnime} color="white" />
        </div>
      </section>
      {/* end Anime Terpopuler */}
      <div
        className={`${poppins.className} mx-auto w-full bg-[url('/PPbgWhite.png')] bg-cover bg-fixed bg-center px-6 lg:px-12`}
      >
        {/* start Manga Terpopuler */}
        <section>
          <Header title="Manga Populer" color="black" />
          <MangaList api={topManga} color="black" />
        </section>
        {/* end Manga Terpopuler */}
        {/* start Anime Recomended */}
        <section>
          <Header title="Rekomendasi Anime" color="black" />
          <AnimeList api={recomendedAnime} color="black" />
        </section>
        {/* end Anime Recomended */}
        {/* start Manga Recomended */}
        <section>
          <Header title="Rekomendasi Manga" color="black" />
          <MangaList api={recomendedManga} color="black" />
        </section>
        {/* end Manga Recomended */}
        {/* start Weekly Fanart */}
        <section>
          <Header title="Weekly Fanart" color="black" />
          <WeeklyFanArt api={fanarts} />
        </section>
        {/* end Weekly Fanart */}
      </div>
    </>
  );
};

export default Page;
