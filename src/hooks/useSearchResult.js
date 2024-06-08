import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SEARCH_SUGGESTION_API } from "../utils/constant";

const useSearchResult = () => {
  const [searchapidata, setSearchAPiData] = useState();
  const query = useSelector((store) => store.searchValue.searchValue);
  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  const fetchData = async () => {
    try {
      const res = await fetch(SEARCH_SUGGESTION_API + query);
      const data = await res.json();
      setSearchAPiData(data?.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  return searchapidata;
};

export default useSearchResult;
