import "ionicons";
import pawstagram from "../../assets/logo_2.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import ChatboxContext from "/src/contexts/ChatbotContext.jsx";

function TopBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { showChatbox } = useContext(ChatboxContext);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <div
      className={
        "w-full flex justify-between items-center border-gray-200 px-4 sm:px-6 lg:px-8 bg-pawBgFour top-bar " +
        theme
      }
    >
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <button className="theme-btn" onClick={toggleTheme}>
          <img src={pawstagram} className="h-14 w-14" alt="Pawstagram logo" />
          {/* {theme === "light" ? "dark" : "light"} */}
        </button>
      </div>

      {/* Search Input */}
      <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
        <div className="max-w-lg w-full lg:max-w-xs">
          <label htmlFor="search" className="relative">
            <input
              id="search"
              type="search"
              className={
                "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pawBgOne focus:border-pawBgOne text-sm color-bg " +
                theme
              }
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ion-icon
                name="search-outline"
                style={{ fontSize: "1.5em" }}
              ></ion-icon>
            </div>
          </label>
        </div>
      </div>

      {/* Avatar, Notifications, and Logout Button */}
      <div className="ml-4 flex items-center md:ml-6">
        {/* Petpal */}
        <button
          type="button"
          onClick={showChatbox}
          className="ml-3 p-1 border-2 border-transparent text-gray-600 rounded-full hover:scale-125 hover:text-white focus:outline-none focus:text-gray-700  transition duration-150 ease-in-out"
          aria-label="Notifications"
        >
          <ion-icon name="paw" style={{ fontSize: "1.5em" }}></ion-icon>
        </button>

        {/* Notifications Button */}
        <button
          type="button"
          className="ml-3 p-1 border-2 border-transparent text-gray-600 rounded-full 
          hover:scale-125 hover:text-white focus:outline-none focus:text-gray-700 focus:bg-gray-200 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
          aria-label="Notifications"
        >
          <ion-icon
            name="notifications-outline"
            style={{ fontSize: "1.5em" }}
          ></ion-icon>
        </button>

        {/* Logout Button */}
        <button
          type="button"
          onClick={handleLogout}
          className="ml-3 p-1 border-2 border-transparent text-gray-600 rounded-full hover:scale-125 hover:text-white focus:outline-none focus:text-gray-700 focus:bg-gray-200  transition duration-150 ease-in-out"
          aria-label="Logout"
        >
          <ion-icon
            name="log-out-outline"
            style={{ fontSize: "1.5em" }}
          ></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
