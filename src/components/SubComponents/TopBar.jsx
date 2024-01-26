import "ionicons";
import pawstagram from "../../assets/pawstagram.png";
import UserAvatar from "./UserAvatar";

function TopBar() {
  return (
    <div className="w-full border-gray-200 px-4 sm:px-6 lg:px-8 bg-pawBgFour">
      <div className="flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex">
          <img
            src={pawstagram}
            className="h-14 w-14 m-4"
            alt="Pawstagram logo"
          />
        </div>

        <div className="flex-1 hidden md:block">
          <div className="relative">
            <input
              type="search"
              className="w-1/2 pr-10 pl-4 py-2 border rounded-md leading-5  border-pawBgTwo dark:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pawBgOne focus:border-pawBgOne"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-14 pr-14 flex items-center pointer-events-none">
              {/* Search Icon */}
              <button
                type="button"
                className="p-1 border-2 border-transparent text-gray-600 rounded-full hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-200 dark:focus:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
                aria-label="Logout"
              >
                <ion-icon name="search-outline"></ion-icon>
              </button>
              <div className="mt-7 pb-5">
                <UserAvatar
                  isOnline={true}
                  size="w-11 h-11"
                  indicatorPosition="top-6 left-9"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Button */}

        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="p-1 border-2 border-transparent text-gray-600 rounded-full hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-200 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
            aria-label="Logout"
          >
            <ion-icon name="notifications-outline"></ion-icon>
          </button>
        </div>

        {/* Logout Button */}

        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="p-1 border-2 border-transparent text-gray-600 rounded-full hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-200 dark:focus:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
            aria-label="Logout"
          >
            <ion-icon name="log-out-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
