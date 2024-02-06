"use client";
import YouTube from "react-youtube";

const VideoPlayerNew = ({ youtubeID }) => {
  const option = {
    width: "1280",
    height: "500",
    // 720
  };
  return (
    <div>
      <YouTube
        videoId={youtubeID}
        onReady={(event) => event.target.pauseVideo}
        opts={option}
        // className="md:w-[1280px] w-1/2 md:h-[500px] h-1/2"
        onError={() => alert("Video is brokeng, please try yang lain 😙")}
      />
    </div>
  );
};

export default VideoPlayerNew;
