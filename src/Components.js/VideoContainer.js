import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import useVideoContainer from "../hooks/useVideoContainer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const Items = useSelector((store) => store?.videoContainer?.videoContainer);
  const videos = Items?.items;
  useVideoContainer();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {videos?.map((video) => (
        <Link
          key={video?.id}
          to={"/watch?v=" + video?.id}
          className="flex-shrink-0"
        >
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
