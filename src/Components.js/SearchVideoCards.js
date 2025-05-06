import useCount from "../hooks/useCount";

const SearchVideoCards = ({ info }) => {
  return (
    <div className="flex flex-col sm:flex-row p-2 m-2 rounded-lg">
      <div className="w-full sm:w-auto p-2">
        <img
          className="rounded-lg w-full sm:w-[320px] object-cover"
          src={info?.snippet?.thumbnails?.medium?.url}
          alt={info?.snippet?.title}
        />
      </div>
      <div className="px-2 py-2 sm:pt-8">
        <h3 className="line-clamp-2 font-semibold leading-tight text-base">
          {info?.snippet?.title}
        </h3>
        <p className="text-sm font-semibold text-gray-600 mt-1">
          {info?.snippet?.channelTitle}
        </p>
        <p className="hidden sm:block text-sm pt-3 font-medium text-gray-600 line-clamp-2">
          {info?.snippet?.description}
        </p>
      </div>
    </div>
  );
};

export default SearchVideoCards;
