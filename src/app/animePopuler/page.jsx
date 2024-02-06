"use client"
import { useEffect, useState } from "react"
import AnimeList from "@/components/AnimeList"
import Pagination from "@/components/Utilities/Pagination"
import { getAnimeResponse } from "@/libs/api-libs"
import { poppins } from "@/components/Utilities/font"
import Header from "@/components/AnimeList/Header"

const Page = () => {
 
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  },[page])



  return (
    <>
      <div
        className={`${poppins.className} bg-[url('/PPbgWhite.png')] bg-cover bg-center bg-fixed relative`}
      >
        <div className="container mx-auto px-4 z-10 ">
          {/* start Anime Terpopuler */}
          <section className="md:mt-16 mt-3">
            {/* <HeaderMenu title={`ANIME TERPOPULER #${page}`} /> */}
            <Header title={`ANIME TERPOPULER #${page}`} color="dark"/>
            <AnimeList api={topAnime} />
            <Pagination
              page={page}
              lastPage={topAnime.pagination?.last_visible_page}
              setPage={setPage}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Page