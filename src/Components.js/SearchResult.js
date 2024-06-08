import { Link } from "react-router-dom";
import useSearchResult from "../hooks/useSearchResult";
import SearchVideoCards from "./SearchVideoCards";

const SearchResult = () => {
  const searchapidata = useSearchResult();

  return (
    <div className="w-full">
      {searchapidata?.map((a) => (
        <Link key={a?.id?.videoId} to={"/watch?v=" + a?.id?.videoId}>
          <SearchVideoCards info={a} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
