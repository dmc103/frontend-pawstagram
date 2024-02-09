import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import Nav from "./SubComponents/Nav";
import Card from "./SubComponents/Card";
import banner from "../assets/banner.jpg";
import UserAvatar from "./SubComponents/UserAvatar";
import Tab from "./SubComponents/Tab";
import { ThemeContext } from "../contexts/ThemeContext";
import TopBar from "./SubComponents/TopBar";

function UserProfile() {
  const { userName } = useParams();
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const spinner = "https://i.gifer.com/Xqg8.gif";

  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <img src={spinner} alt="spinner" />
        <p style={{ fontSize: "20px" }}>Loading ...</p>
      </div>
    );
  }

  return (
    <div className={"color-bg " + theme}>
      <TopBar />

      <div className={"flex mt-4 max-w-4xl mx-auto gap-6 color-bg " + theme}>
        <div>
          <Nav />
        </div>

        <Card>
          <div className="relative">
            <div className="flex rounded-lg overflow-hidden justify-center items-center h-60">
              <img src={banner} alt="banner" />
            </div>

            <div className="absolute bottom-0 transform translate-y-1/2 w-full flex justify-center">
              <UserAvatar
                profileImageUrl={user.profilepic}
                isOnline={true}
                size="w-20 h-20"
                indicatorPosition="top-14 start-16"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-44">
            <div className="max-w-lg text-xl font-bold leading-normal text-pawBgFour mt-2 mb-2">
              <p>{userName}</p>
            </div>
            <div className="text-m text-gray-500">{user.country}</div>
            <div className="text-m text-gray-500">{user.bio}</div>
          </div>
          <Tab />
        </Card>
      </div>
    </div>
  );
}

export default UserProfile;
