import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoContainer } from "../Redux/videoContainerSilce";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_API } from "../utils/constant";

const useVideoContainer = () => {
  const disptach = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + GOOGLE_API_KEY);
    const json = await data.json();
    console.log(json)
    disptach(addVideoContainer(json));
  };
};

export default useVideoContainer;
