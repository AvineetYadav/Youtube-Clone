import { useState, useEffect } from "react";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import useVideoContainer from "../hooks/useVideoContainer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const Items = useSelector((store) => store?.videoContainer?.videoContainer);
  const videos = Items?.items;
  useVideoContainer();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let paddingLeft = "";
  let paddingRight = "";

  if (screenWidth === 414) {
    paddingLeft = "7px";
  } else if (screenWidth === 412) {
    paddingLeft = "5px";
  } else if (screenWidth === 375) {
    paddingRight = "0px";
  } else if (screenWidth === 390) {
    paddingRight = "0px";
  } else if (screenWidth === 360) {
    paddingRight = "12px";
  } else if (screenWidth === 344) {
    paddingLeft = "8px";
  } else if (screenWidth === 430) {
    paddingLeft = "13px";
  }

  return (
    <div className="w-full px-2">
      <div
        className="flex justify-center sm:justify-start"
        style={{
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-sm w-full">
          {videos?.map((video) => (
            <Link key={video?.id} to={"/watch?v=" + video?.id} className="flex-shrink-0">
              <VideoCards info={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
