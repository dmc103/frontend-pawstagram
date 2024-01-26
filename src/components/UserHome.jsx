import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./SubComponents/NavBar";
import CardForPost from "./SubComponents/CardForPost";
import CardForSharedPost from "./SubComponents/CardForSharedPost";
import UserAvatar from "./SubComponents/UserAvatar";
import { ThemeContext } from "../contexts/ThemeContext";

function UserHome() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const {theme } = useContext(ThemeContext);

  const catSpinner =
    "https://media4.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif?cid=ecf05e47adpu5m1dewuaidkpywvo7tzpou00hmrzxlduqhw9&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    // TODO: Add a loading spinner
    return <img src={catSpinner} alt="cat-spinner" />;
  }

  return (
    <div className={"flex mt-4 max-w-4xl mx-auto gap-6 " + theme}>
      <div>
        <NavBar />
      </div>
      <div className={"w-3/4 " + theme}>
        <div className={theme}>
          <div className={"w-full max-w-XL bg-white border border-gray-200 rounded-lg shadow dark:bg-pawBgFour dark:border-emerald-300 color-bg " + theme }>
            <div className="flex flex-col items-center mt-7 pb-10">
              <UserAvatar isOnline={true} />

              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.userName}
              </h5>

              <span className="text-sm text-gray-500 dark:text-gray-100">
                {user.bio}
              </span>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className={"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  bg-indigo-600  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 button " + theme }
                >
                  Add friend
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>

        <CardForPost />
        <CardForSharedPost />
      </div>
    </div>
  );
}

export default UserHome;
