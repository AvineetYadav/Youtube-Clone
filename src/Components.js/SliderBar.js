// SliderBar.js
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import HOME from "../assets/home-4b01be11.svg";
import SHORTS from "../assets/originals-bd1d85e9.svg";
import SUBSCRIPTION from "../assets/subscriptions-f1b2de6f.svg";
import LIBRARY from "../assets/library-41db9522.svg";
import HISTORY from "../assets/explore-88dbf43f.svg";
import MUSIC from "../assets/youtube-music-2e37a528.svg";
import LIKED from "../assets/library-41db9522.svg";

const SliderBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);

  if (!isMenuOpen) return null;

  const handleClose = () => {
    dispatch(closeMenu());
  };

  return (
    <>
      {/* Overlay for small screens */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        onClick={handleClose}
      ></div>

      <div
        className="fixed md:static top-0 left-0 bottom-0 bg-white z-50 md:z-auto w-64 md:w-[220px] h-full md:h-auto overflow-y-auto px-4 py-5"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {/* Close Button for small screens */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            className="text-gray-600 text-2xl font-bold px-2"
            onClick={handleClose}
            aria-label="Close Sidebar"
          >
            ✕
          </button>
        </div>

        <ul className="border-b pb-4">
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={HOME} alt="Home" />
            <span className="text-md font-medium">Home</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={SHORTS} alt="Shorts" />
            <span className="text-md font-medium">Shorts</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={SUBSCRIPTION} alt="Subscriptions" />
            <span className="text-md font-medium">Subscriptions</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={LIKED} alt="Live" />
            <span className="text-md font-medium">Live</span>
          </li>
        </ul>

        <ul className="mt-5 border-b pb-5">
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={LIBRARY} alt="Library" />
            <span className="text-md font-medium">Library</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={HISTORY} alt="History" />
            <span className="text-md font-medium">History</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={MUSIC} alt="Music" />
            <span className="text-md font-medium">Music</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <img className="w-6 mr-3" src={LIKED} alt="Liked Videos" />
            <span className="text-md font-medium">Videos</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SliderBar;
