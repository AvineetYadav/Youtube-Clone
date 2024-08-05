import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoContainer } from "../Redux/videoContainerSilce";
import {  YOUTUBE_VIDEO_API } from "../utils/constant";

const useVideoContainer = () => {
  const disptach = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const url = `${YOUTUBE_VIDEO_API}${apiKey}`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json)
    disptach(addVideoContainer(json));
  };
};

export default useVideoContainer;
