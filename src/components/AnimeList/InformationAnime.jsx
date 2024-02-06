import React from "react";

const InformationAnime = ({ datas }) => {
  
  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", { month: "short" });
  };

  return (
    <div className="pb-[4rem] md:w-full md:h-56 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-7 gap-5 overflow-y-scroll">
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Score: </span> {datas.data.score}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Ranked: </span>#{datas.data.rank}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Popularity: </span>#
          {datas.data.popularity}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Members: </span>
          {datas.data.members}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Favorites: </span>
          {datas.data.favorites}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Type: </span>
          {datas.data.type}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Episodes: </span>
          {datas.data.episodes}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Aired: </span>
          {getMonthName(datas.data.aired.prop.from.month)}{" "}
          {datas.data.aired.prop.from.day}, {datas.data.aired.prop.from.year} to{" "}
          {getMonthName(datas.data.aired.prop.to.month)}{" "}
          {datas.data.aired.prop.to.day}, {datas.data.aired.prop.to.year}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Season: </span>
          {datas.data.season}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Broadcast: </span>
          {datas.data.broadcast.day} at {datas.data.broadcast.time} (
          {datas.data.broadcast.timezone})
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Producers: </span>
          {datas.data.producers.map((producer, index) => {
            return <span key={index}>{producer.name}. </span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Licensors: </span>
          {datas.data.licensors.map((licensor, index) => {
            return <span key={index}>{licensor.name}. </span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Studios: </span>
          {datas.data.studios.map((studio, index) => {
            return <span key={index}>{studio.name}</span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Source: </span>
          {datas.data.source}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Genres: </span>
          {datas.data.genres.map((genre, index) => {
            return <span key={index}>{genre.name}. </span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Theme: </span>
          {datas.data.themes.map((theme, index) => {
            return <span key={index}>{theme.name}</span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Duration: </span>{datas.data.duration}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Rating: </span>{datas.data.rating}
        </h1>
      </div>
    </div>
  );
};

export default InformationAnime;
