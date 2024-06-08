import React from "react";
import { useSelector } from "react-redux";
import 'react-loading-skeleton/dist/skeleton.css';
import LIKE from "../assets/like-1-svgrepo-com.svg";
import DILIKE from "../assets/dislike-svgrepo-com.svg";
import SHARE from "../assets/share-2-svgrepo-com.svg";
import DOWNLOAD from "../assets/download-svgrepo-com.svg";
import useChannelInfo from "../hooks/useChannelInfo";
import useCount from "../hooks/useCount";
import Shimmer from "./Shimmer"

const ChannelInfo = () => {
  const info = useSelector((store) => store?.channelInfo?.channelInfo);
  const description = useSelector((store) => store?.channelInfo?.description);
  const loading = useChannelInfo(); 

  const infoItem = info?.items?.[0]; 
  const subscriberCount = useCount(infoItem?.statistics?.subscriberCount || 0);
  const likeCount = useCount(description?.statistics?.likeCount || 0);
  const viewCount = useCount(description?.statistics?.viewCount || 0);

  const channelTitle = infoItem?.snippet?.title || '';
  const thumbnailUrl = infoItem?.snippet?.thumbnails?.default?.url || '';

  return (
    <div className="py-4 px-4">
      {loading ? (
        <Shimmer/>
      ) : (
        <div>
          <div className="pb-2 font-semibold text-lg">
            {description?.snippet?.title}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full overflow-hidden">
                <img
                  src={thumbnailUrl}
                  alt={channelTitle}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <div>
                <h2 className="text-md font-semibold">
                  {channelTitle}
                </h2>
                <p className="text-xs font-semibold text-gray-600">
                  {subscriberCount} subscribers
                </p>
              </div>
              <button className="bg-gray-200 text-sm font-semibold m-1 p-2 rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 inline-block">
                Subscribe
              </button>
            </div>
            <div className="button-container flex gap-4 mt-4 md:mt-0">
              <div className="flex gap-2 items-center">
                <button className="flex items-center gap-1 bg-gray-200 text-sm font-semibold py-1.5 px-3 rounded-full hover:bg-gray-300">
                  <img src={LIKE} className="w-4 h-4" alt="Like" />
                  {likeCount || `Like`}
                </button>
                <button className="flex items-center gap-1 bg-gray-200 text-sm font-semibold py-1.5 px-3 rounded-full hover:bg-gray-300">
                  <img src={DILIKE} className="w-4 h-4" alt="Dislike" />
                  Dislike
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <button className="flex items-center gap-1 bg-gray-200 text-sm font-semibold py-1.5 px-3 rounded-full hover:bg-gray-300">
                  <img src={SHARE} className="w-4 h-4" alt="Share" />
                  Share
                </button>
                <button className="flex items-center gap-1 bg-gray-200 text-sm font-semibold py-1.5 px-3 rounded-full hover:bg-gray-300">
                  <img src={DOWNLOAD} className="w-4 h-4" alt="Download" />
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#f3f4f6] p-4 rounded-lg mt-4 text-sm font-semibold">
            <div className="pb-2 text-md">
              {viewCount} views
            </div>
            <div>{description?.snippet?.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelInfo;
