import useCount from "../hooks/useCount";

const SearchVideoCards = ({ info }) => {
  return (
    <div className="flex">
      <div className=" p-2 m-2  rounded-lg overflow-hidden">
        <img
          className="rounded-lg w-full"
          src={info?.snippet?.thumbnails?.medium?.url}
          alt={info?.snippet?.title}
        />
      </div>
      <div className="px-2 py-2  pt-8">
          <h3 className="line-clamp-2 font-semibold leading-tight">
            {info?.snippet?.title}
          </h3>

          <p className="text-sm font-semibold text-gray-600">
            {info?.snippet?.channelTitle}
        </p>
        <p className="text-sm pt-5 font-semibold text-gray-600">
            {info?.snippet?.description}
          </p>  
        </div>
    </div>
  );
};

export default SearchVideoCards;
