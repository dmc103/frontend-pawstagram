import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Nav from "./SubComponents/Nav";
import CardForPost from "./SubComponents/CardForPost";
import { ThemeContext } from "../contexts/ThemeContext";
import TopBar from "./SubComponents/TopBar";
import "../index.css";
import User from "./SubComponents/User";
import Card from "./SubComponents/Card";
import AllPostsList from "./SubComponents/AllPostsList";

function UserHome() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const toggleRefresh = () => setRefreshTrigger(!refreshTrigger);

  console.log("User state:", user);

  const spinner = "https://i.gifer.com/Xqg8.gif";

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <img src={spinner} alt="spinner" />
        <p style={{ fontSize: "20px" }}>Loading ...</p>
      </div>
    );
  }

  // console.log(
  //   "refreshTrigger value right before SharedPostsList:",
  //   refreshTrigger
  // );

  return (
    <div>
      <TopBar />
      <div
        className={
          " w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-pawBgTwo lg:rounded-lg h-screen overflow-auto no-border color-bg " +
          theme
        }
      >
        <div className="flex">
          <div className="mt-4 max-w-full">
            <Nav />
          </div>

          <div className="flex flex-col mx-24 mt-4">
            <CardForPost onPostCreated={toggleRefresh} />

            <AllPostsList refreshTrigger={refreshTrigger} />
          </div>

          <div className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500 bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            <h4>
              <Card className="mt-5">People you may know</Card>
            </h4>

            <User currentUser={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
