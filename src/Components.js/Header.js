import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Redux/appSlice";
import { cacheResults } from "../Redux/searchSlice";
import { useEffect, useState } from "react";
import { addSearchValue } from "../Redux/searchValueSlice";
import { useNavigate } from "react-router-dom";
import YOUTUBE_LOGO from "../assets/youtube-logo.svg";
import HAMBURGER_ICON from "../assets/hamburger-menu.svg";
import NOTIFICATION from "../assets/notifications.svg";
import UPLOAED from "../assets/upload.svg";
import USER_ICON from "../assets/profile-icon.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleClick = (suggestion) => {
    dispatch(addSearchValue(suggestion));
    setSearchQuery(suggestion);
    navigate(`/searchResult`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchQuery) {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [searchQuery, searchCache]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  return (
    <div className="sticky top-0 left-0 right-0 py-4 bg-white z-10">
      <div className="flex justify-between items-center gap-4 px-4">
        <div className="flex items-center gap-5">
          <img
            onClick={toggleMenuHandler}
            className="h-6 cursor-pointer"
            alt="menu"
            src={HAMBURGER_ICON}
          />
          <a href="/">
            <img className="h-6" alt="youtube-logo" src={YOUTUBE_LOGO} />
          </a>
        </div>
        <div className="flex-1 flex justify-center px-4">
          <div className="relative">
            <input
              className="px-5 border border-gray-400 p-2 rounded-l-full w-96"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              🔍
            </button>
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute bg-white py-2 px-2 w-full shadow-lg rounded-lg border border-gray-100">
                <ul>
                  {suggestions.map((sug) => (
                    <li
                      key={sug}
                      className="py-2 px-3 shadow-sm hover:bg-gray-100"
                      onMouseDown={() => handleClick(sug)}
                    >
                      🔍 {sug}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img className="h-8" alt="upload" src={UPLOAED} />
          <img className="h-8" alt="notifications" src={NOTIFICATION} />
          <img className="h-8" alt="user" src={USER_ICON} />
        </div>
      </div>
    </div>
  );
};

export default Header;
