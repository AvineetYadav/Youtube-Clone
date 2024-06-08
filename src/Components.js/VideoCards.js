import useCount from "../hooks/useCount";

const VideoCards = ({ info }) => {
  return (
    <div className="p-2 m-2 max-w-sm rounded-lg overflow-hidden">
      <img
        className="rounded-lg w-full"
        src={info?.snippet?.thumbnails?.maxres
          ?.url}
        alt={info?.snippet?.title}
      />
      <div className="px-4 py-2">
      <h3 className="line-clamp-2 font-semibold leading-tight">{info?.snippet?.title}</h3>

        <p className="text-sm font-semibold text-gray-600">{info?.snippet?.channelTitle}</p>
        <p className="text-sm font-semibold text-gray-600">
          {useCount(info?.statistics?.viewCount)} views
        </p>
      </div>
    </div>
  );
};

export default VideoCards;
