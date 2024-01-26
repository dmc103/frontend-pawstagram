import "ionicons";
import pawstagram from "../../assets/pawstagram.png";
import UserAvatar from "./UserAvatar";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

function TopBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full flex items-center border-gray-200 px-4 sm:px-6 lg:px-8 bg-pawBgFour">
      {/* Logo Section */}
      <div className={"flex-shrink-0" + theme}>
        <button className="theme-btn" onClick={toggleTheme}>
          <img src={pawstagram} className="h-14 w-14" alt="Pawstagram logo" />
        </button>
      </div>

      {/* Search Input */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-1/3">
          <input
            type="search"
            className="pl-4 pr-10 py-2 border rounded-md leading-5 bg-white dark:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pawBgOne focus:border-pawBgOne"
            placeholder="Search..."
          />
          <button
            type="button"
            className="absolute inset-y-0 right-6 flex items-center text-gray-600 hover:text-gray-700 focus:outline-none"
            aria-label="Search"
          >
            <ion-icon
              name="search-outline"
              style={{ fontSize: "1.5em" }}
            ></ion-icon>
          </button>
        </div>
      </div>

      {/* Avatar, Notifications, and Logout Button */}
      <div className="flex items-center gap-4">
        {/* UserAvatar */}
        <UserAvatar
          isOnline={true}
          size="w-11 h-11"
          indicatorPosition="bottom-0 right-0"
        />

        {/* Notifications Button */}
        <button
          type="button"
          className="p-1 border-2 border-transparent text-gray-600 rounded-full hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-200 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
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
          className="p-1 border-2 border-transparent text-gray-600 rounded-full hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-200 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
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
