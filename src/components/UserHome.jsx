import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./SubComponents/NavBar";
import CardForPost from "./SubComponents/CardForPost";
import CardForSharedPost from "./SubComponents/CardForSharedPost";
import { ThemeContext } from "../contexts/ThemeContext";
import TopBar from "./SubComponents/TopBar";
import "../index.css";

function UserHome() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

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
    <div>
      <TopBar />
      <div className={"w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-pawBgTwo lg:rounded-lg h-screen overflow-hidden no-border " + theme}>
        <div className="flex">
          <div className={"flex mt-4 max-w-4xl mx-auto " + theme}>
            <NavBar />
          </div>

          <div className="flex flex-col">
            <CardForPost />
            <CardForSharedPost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
