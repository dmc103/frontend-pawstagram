import "ionicons";
import UserAvatar from "./UserAvatar";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Nav() {
  const activeElement =
    "flex gap-3 py-3 my-2 bg-pawBgFour text-white px-4 -mx-10 md:px-10 md:gap-3 md:scale-100 rounded-md shadow-md shadow-gray-300";

  const nonActiveElement =
    "flex gap-3 py-2 my-2 hover:bg-pawBgOne -mx-10 px-10 md:px-7 rounded-md transition-all hover:scale-95 hover:shadow-md small: scale-95";

  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={"min-h-screen" + theme}>
      <div
        className="sidebar left-0 top-0 z-10 min-h-screen w-[4.5rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: isHovered ? "14rem" : "4.5rem",
          backgroundColor: isHovered ? "white" : undefined,
        }}
      >
        <div className="flex h-screen flex-col justify-between pt-2 pb-4">
          <div>
            <div className="w-max p-2.5">
              <UserAvatar
                isOnline={true}
                size="w-11 h-11"
                indicatorPosition="bottom-0 right-0"
              />
            </div>
            <ul className="px-6 font-medium tracking-wide">
              {/* Updates */}
              <li className="min-w-max group">
                <NavLink
                  to="/homepage"
                  className={({ isActive }) =>
                    isActive
                      ? `${activeElement} active-nav-link`
                      : nonActiveElement
                  }
                >
                  <ion-icon name="home-outline"></ion-icon>
                  <span
                    className="transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0 }}
                  >
                    Home
                  </span>
                </NavLink>

                {/* Friends */}
              </li>
              <li className="min-w-max">
                <NavLink
                  to={`/profile/${user.userName}`}
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="people-outline"></ion-icon>
                  <span
                    className="transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0 }}
                  >
                    Friends
                  </span>
                </NavLink>

                {/* Chat */}
              </li>
              <li className="min-w-max">
                <NavLink
                  to={`/profile/${user.userName}`}
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="chatbubbles"></ion-icon>
                  <span
                    className="transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0 }}
                  >
                    Chat
                  </span>
                </NavLink>
              </li>

              {/* Ai helper */}
              <li className="min-w-max">
                <NavLink
                  to={`/profile/${user.userName}`}
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="help-buoy"></ion-icon>
                  <span
                    className="transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0 }}
                  >
                    AI Helper
                  </span>
                </NavLink>
              </li>

              {/* About */}
              <li className="min-w-max">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="log-out"></ion-icon>
                  <span
                    className="transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0 }}
                  >
                    Log out
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
