"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeID }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-[##ffc639] float-right bg-[#393e46] px-3 mb-1 rounded"
        >
          X
        </button>
        <YouTube
          videoId={youtubeID}
          onReady={(event) => event.target.pauseVideo}
                opts={option}
                onError={() => alert("Video is brokeng, please try yang lain 😙")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 w-32 p-1 bg-white text-[#222831] rounded text-xl hover:bg-[#ffc639] transition-all shadow-xl"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
