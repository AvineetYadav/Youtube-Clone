import { useSelector } from "react-redux";
import HOME from "../assets/home-4b01be11.svg";
import SHORTS from "../assets/originals-bd1d85e9.svg";
import SUBSCRIPTION from "../assets/subscriptions-f1b2de6f.svg";
import LIBRARY from "../assets/library-41db9522.svg";
import HISTORY from "../assets/explore-88dbf43f.svg";
import MUSIC from "../assets/youtube-music-2e37a528.svg";
import LIKED from "../assets/library-41db9522.svg";

const SliderBar = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" sticky flex flex-row">
      <div
      className="slider-bar  px-4 md:px-4 rounded-xl w-full md:w-64 lg:w-[220px]"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <ul className="menu-list border-b pb-4 md:pb-6">
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img className="w-8 md:w-6 mr-4 md:mr-3" src={HOME} alt="Home" />
          <span className="text-sm md:text-md ml-4 font-medium">Home</span>
        </li>
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img className="w-8 md:w-6 mr-4 md:mr-3" src={SHORTS} alt="Shorts" />
          <span className="text-sm md:text-md ml-4 font-medium">Shorts</span>
        </li>
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img
            className="w-8 md:w-6 mr-4 md:mr-3"
            src={SUBSCRIPTION}
            alt="Subscriptions"
          />
          <span className="text-sm ml-4 md:text-md font-medium">
            Subscriptions
          </span>
        </li>
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img className="w-8 md:w-6 mr-4 md:mr-3" src={LIKED} alt="Live" />
          <span className="text-sm md:text-md ml-4 font-medium">Live</span>
        </li>
      </ul>

      <ul className="subscription-list mt-4 md:mt-5 border-b pb-4 md:pb-6">
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img
            className="w-8 md:w-6 mr-4 md:mr-3"
            src={LIBRARY}
            alt="Library"
          />
          <span className="text-sm md:text-md ml-4 font-medium">Library</span>
        </li>
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img
            className="w-8 md:w-6 mr-4 md:mr-3"
            src={HISTORY}
            alt="History"
          />
          <span className="text-sm md:text-md ml-4 font-medium">History</span>
        </li>
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img className="w-8 md:w-6 mr-4 md:mr-3" src={MUSIC} alt="Music" />
          <span className="text-sm md:text-md ml-4 font-medium">Music</span>
        </li>
        <li className="menu-item flex p-3 md:p-2 rounded-lg items-center hover:bg-gray-100">
          <img
            className="w-8 md:w-6 mr-4 md:mr-3"
            src={LIKED}
            alt="Liked Videos"
          />
          <span className="text-sm md:text-md ml-4 font-medium">Videos</span>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default SliderBar;
