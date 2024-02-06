// import IconPeng from "@/assets/IconPeng.svg";
import { poppins } from "@/components/Utilities/font";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div
        className={`${poppins.className} relative bg-[url('/PPbgWhite.png')] bg-cover bg-fixed bg-center`}
      >
        {/* Start About Us */}
        <div className="container z-10 mx-auto flex items-center px-4 ">
          <div className="mt-8 flex w-full flex-col items-center justify-center rounded-3xl bg-white py-28 shadow-xl md:mt-36 md:gap-2 md:py-64">
            <h1 className="pb-6 text-3xl font-bold text-black md:text-8xl">
              About <span className="text-[#FFB52D]">Us</span>
            </h1>
            <p className="text-md px-12 text-center md:px-32 md:text-2xl">
              <span className="font-bold italic text-[#FFB52D]">Plip-plop</span>{" "}
              adalah tempat dimana para seniman digital bisa menunjukkan
              <br />
              karya-karyanya yang tentunya dari berbagai genre, dari romansa
              hingga
              <br /> sci-fi. Dengan fitur "upload karya" kami percaya semua
              orang bisa menjadi
              <br /> seniman dengan caranya masing-masing.
            </p>
          </div>
        </div>
        {/* End About Us */}
        {/* Start Comic Artist */}
        <div className="container z-10 mx-auto mt-8 flex items-center px-4 md:mt-16">
          <div className="mt-8 flex w-full flex-col items-center justify-center rounded-3xl bg-[#FFB52D] py-28 shadow-xl md:mt-16 md:gap-2 md:py-64">
            <h1 className="pb-6 text-3xl font-medium text-white md:text-8xl">
              Comic Artist
            </h1>
            <p className="text-md px-12 text-center text-white md:px-32 md:text-2xl ">
              Siapa-siapa saja ya yang jadi komikus andalan di PlipPlop?
              <br />
              Kira-kira apa ya profil mereka dan karya-karyanya?
            </p>
            <Link
              href="/"
              className="mt-10 rounded-3xl bg-white px-10 py-3 text-[#FFB52D] transition-all hover:shadow-2xl"
            >
              Ingin Tahu Lebih Banyak?
            </Link>
          </div>
        </div>
        {/* End Comic Artist */}
        {/* Start Survey Critics */}
        <div className="container z-10 mx-auto mt-8 flex items-center px-4 md:mt-16">
          <div className="mb-16 mt-8 flex w-full flex-col items-start justify-center md:mb-16 md:mt-16 md:gap-2">
            <h1 className="pb-1 text-xl font-semibold text-black md:text-5xl">
              Beri Tahu <span className="text-[#FFB52D]">Kami!</span>
            </h1>
            <p className="font-normal text-black md:text-lg">
              kalau kalian punya saran, kritik yang membangun, atau bahkan hanya
              sekedar ingin menghubungi kami :3
            </p>
            <div className="flex w-full flex-row gap-10">
              <input
                type="text"
                placeholder="Nama Kamu"
                className="mt-10 w-1/2 rounded-md border-4 bg-white py-3 pl-5 pr-[34.30rem] text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
              />
              <input
                type="text"
                placeholder="Nama Kamu"
                className="mt-10 w-1/2 rounded-md border-4 bg-white py-3 pl-5 pr-[34.30rem] text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
              />
            </div>
            <input
              type="text"
              placeholder="Ingin Beri tahu apa"
              className="mt-10 w-full rounded-md border-4 bg-white py-3 pb-44 pl-5 text-black outline-[#FFB52D] transition-all hover:border-[#FFB52D] hover:shadow-2xl"
            />
            <Link
              href="/"
              className="mt-10 w-1/6 rounded-md bg-[#FFB52D] py-3 text-center text-white transition-all hover:shadow-2xl"
            >
              Kirim
            </Link>
          </div>
        </div>
        {/* End Survey Critics */}
      </div>
    </>
  );
};

export default page;
