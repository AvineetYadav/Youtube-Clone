import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import ChannelInfo from "./ChannelInfo";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
        <div className="flex-grow lg:w-3/4">
          <div className="relative overflow-hidden">
            <iframe
              className="w-full aspect-video rounded-xl"
              src={`https://www.youtube.com/embed/${searchParam.get("v")}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <ChannelInfo className="mt-5" />
          <CommentContainer className="mt-5" />
        </div>
        <div className="lg:ml-5 lg:w-1/4 w-full mt-5 lg:mt-0">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
