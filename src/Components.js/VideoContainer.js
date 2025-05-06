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

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logic to determine padding-left or padding-right based on screen width
  let paddingLeft = "";
  let paddingRight = "";

  // Apply different paddings based on the screen width
  if (screenWidth === 414) {
    paddingLeft = "7px"; // For screens exactly 414px
  } else if (screenWidth === 412) {
    paddingLeft = "5px"; // For screens exactly 375px
  } else if (screenWidth === 375) {
    paddingRight = "0px"; // For screens exactly 375px
  } else if (screenWidth === 390) {
    paddingRight = "0px"; // For screens exactly 390px
  } else if (screenWidth === 360) {
    paddingRight = "12px"; // For screens exactly 360px
  } else if (screenWidth === 344) {
    paddingLeft = "8px"; // For screens exactly 344px
  } else if (screenWidth === 430) {
    paddingLeft = "13px"; // For screens exactly 430px
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      style={{
        paddingLeft: paddingLeft, // Applying padding-left based on screen width
        paddingRight: paddingRight, // Applying padding-right based on screen width
      }}
    >
      {videos?.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video?.id} className="flex-shrink-0">
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
