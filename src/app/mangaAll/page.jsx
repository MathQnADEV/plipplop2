import Header from "@/components/AnimeList/Header";
import MangaList from "@/components/Manga/MangaList";
import { poppins } from "@/components/Utilities/font";
import {
  getMangaResponse,
  getNestedMangaResponse,
  reproduce,
} from "@/libs/api-libs";

const page = async () => {
  const topManga = await getMangaResponse("top/manga", "limit=8");
  let recomendedManga = await getNestedMangaResponse(
    "recommendations/manga",
    "entry"
  );
  recomendedManga = reproduce(recomendedManga, 16);

  return (
    <div
      className={`${poppins.className} bg-[url('/PPbgWhite.png')] bg-cover bg-center bg-fixed relative`}
    >
      <div className="container mx-auto px-4 z-10 ">
        {/* start Anime Terpopuler */}
        <section className="md:mt-16 mt-3">
          <Header title="Manga Populer" color="black" />
          <MangaList api={topManga} color="black" />
        </section>
        {/* end Anime Terpopuler */}
        {/* start recomended Anime */}
        <section>
          <Header title="Recomended Manga" color="black" />
          <MangaList api={recomendedManga} color="black" />
        </section>
        {/* end recomended anime */}
      </div>
    </div>
  );
};

export default page;
