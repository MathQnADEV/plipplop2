import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { poppins } from "@/components/Utilities/font";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let seasonSummer = await getAnimeResponse("seasons/now", "limit=12")
  let recomendedAnime = await getNestedAnimeResponse(
      "recommendations/anime",
      "entry"
    );
  recomendedAnime = reproduce(recomendedAnime, 16);
  
  return (
    <div
      className={`${poppins.className} bg-[url('/PPbgWhite.png')] bg-cover bg-center bg-fixed relative`}
    >
      <div className="container mx-auto px-4 z-10 ">
        {/* start Anime Terpopuler */}
        <section className="md:mt-16 mt-3">
          <Header title="Anime Populer" color="black" />
          <AnimeList api={topAnime} color="black" />
        </section>
        {/* end Anime Terpopuler */}
        {/* start Anime Season Summer */}
        <section>
          <Header title="Season Summer" color="black" />
          <AnimeList api={seasonSummer} color="black" />
        </section>
        {/* end Anime Season Summer */}
        {/* start recomended Anime */}
        <section>
          <Header title="Recomended Anime" color="black" />
          <AnimeList api={recomendedAnime} color="black"/>
        </section>
        {/* end recomended anime */}
      </div>
    </div>
  );
};

export default page;
