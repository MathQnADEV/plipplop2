import React from 'react'

const InformationManga = ({datas}) => {

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
          <span className="font-bold">Volumes: </span>
          {datas.data.volumes}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Chapters: </span>
          {datas.data.chapters}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Status: </span>
          {datas.data.status}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Published: </span>
          {getMonthName(datas.data.published.prop.from.month)}{" "}
          {datas.data.published.prop.from.day},{" "}
          {datas.data.published.prop.from.year} to{" "}
          {getMonthName(datas.data.published.prop.to.month)}{" "}
          {datas.data.published.prop.to.day},{" "}
          {datas.data.published.prop.to.year}
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
          <span className="font-bold">Themes: </span>
          {datas.data.themes.map((theme, index) => {
            return <span key={index}>{theme.name}</span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Demographic: </span>
          {datas.data.demographics.map((demographic, index) => {
            return <span key={index}>{demographic.name}</span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Serialization: </span>
          {datas.data.serializations.map((serialization, index) => {
            return <span key={index}>{serialization.name}</span>;
          })}
        </h1>
      </div>
      <div className="shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center">
        <h1>
          <span className="font-bold">Authors: </span>
          {datas.data.authors.map((author, index) => {
            return <span key={index}>{author.name}. </span>;
          })}
        </h1>
      </div>
    </div>
  );
}

export default InformationManga