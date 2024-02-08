import { useContext, useState } from "react";
import FriendsList from "./FriendsLists";
import Card from "./Card";
import "ionicons";
import { ThemeContext } from "../../contexts/ThemeContext";
import SharedPostsList from "./SharedPostsList";
import { UserContext } from "../../contexts/UserContext";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const Menus = [
    { name: "Posts", icon: "document-outline", dis: "translate-x-0" },
    { name: "PawFriends", icon: "people-outline", dis: "translate-x-16" },
    {
      name: "About",
      icon: "information-circle-outline",
      dis: "translate-x-32",
    },
    { name: "Images", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Favourites", icon: "heart-circle-outline", dis: "translate-x-64" },
    { name: "Events", icon: "calendar-number-outline", dis: "translate-x-80" },
    { name: "Marketplace", icon: "storefront-outline", dis: "translate-x-96" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Posts":
        return (
          user && <SharedPostsList userId={user._id} refreshTrigger={false} />
        );
      case "PawFriends":
        return <FriendsList currentUser={user} />;

      default:
        return (
          user && (
            <SharedPostsList
              userId={user._id}
              refreshTrigger={refreshTrigger}
            />
          )
        );
    }
  };

  const activeIndex = Menus.findIndex((menu) => menu.name === activeTab);

  return (
    <div className={`bg-rose-200 rounded-t-xl scale-95 color-bg ${theme}`}>
      <ul className="flex relative overflow-x-scroll">
        {Menus.map((menu, index) => (
          <li key={index} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setActiveTab(menu.name)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  menu.name === activeTab ? "-mt-6 text-white" : ""
                }`}
              >
                <ion-icon name={menu.icon} />
              </span>
              <span
                className={`text-gray-500 text-xs mt-1 transition-opacity duration-300 ${
                  menu.name === activeTab
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-10 pt-10">
        <Card>{renderTabContent()}</Card>
      </div>
    </div>
  );
};

export default Tab;
