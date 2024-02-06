import Header from "@/components/AnimeList/Header";
import { poppins } from "@/components/Utilities/font";
import WeeklyFanArt from "@/components/WeeklyFanArt";
import { getFanartResponse } from "@/libs/api-libs";

const page = async () => {
  const fanarts = await getFanartResponse("fanart");
  console.log(fanarts);
  return (
    <div
      className={`${poppins.className} relative bg-[url('/PPbgWhite.png')] bg-cover bg-fixed bg-center`}
    >
      <div className="container z-10 mx-auto ">
        {/* start Weekly Fanart */}
        <section className="mt-3 md:mt-16">
          <Header title="Weekly Fanart" color="black" />
          <WeeklyFanArt api={fanarts} />
        </section>
        {/* end Weekly Fanart */}
      </div>
    </div>
  );
};

export default page;
