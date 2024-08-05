import { useState, useEffect, useMemo } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addChannelInfo, addDescription } from "../Redux/channelInfoSlice";
import { useSearchParams } from "react-router-dom";
import useSearchResult from "../hooks/useSearchResult";

const useChannelInfo = () => {
  const Items = useSelector((store) => store?.videoContainer?.videoContainer);
  const data = Items?.items;
  const [paramsId] = useSearchParams();
  const dispatch = useDispatch();
  const searchapidata = useSearchResult();
  const [loading, setLoading] = useState(true);

  let query = useMemo(() => {
    let foundQuery = null;
    if (data) {
      foundQuery = data.find((item) => item && item.id === paramsId.get("v"));
    }

    if (!foundQuery && searchapidata) {
      foundQuery = searchapidata.find(
        (item) => item && item.id?.videoId === paramsId.get("v")
      );
    }

    if (!foundQuery) {
      foundQuery = JSON.parse(localStorage.getItem("channelQuery"));
    }

    return foundQuery;
  }, [data, paramsId, searchapidata]);

  const fetchData = async () => {
    if (query) {
      localStorage.setItem("channelQuery", JSON.stringify(query));

      const res = await fetch(
        `${YOUTUBE_CHANNEL_API}${query?.snippet?.channelId}`
      );
      const data = await res.json();
      dispatch(addChannelInfo(data));
      dispatch(addDescription(query));
      setLoading(false);
    }
  };

  useEffect(() => {
    const shimmerDelay = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(shimmerDelay);
  }, [query]);

  return loading;
};

export default useChannelInfo;
