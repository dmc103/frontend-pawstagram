import "ionicons";
import UserAvatar from "./UserAvatar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import PropTypes from "prop-types";

function Nav() {
  const activeElement =
    "flex gap-3 py-3 my-2 bg-pawBgFour text-white px-4 -mx-10 md:px-10 md:gap-3 md:scale-100 rounded-md shadow-md shadow-gray-300";

  const nonActiveElement =
    "flex gap-3 py-2 my-2 hover:bg-pawBgOne -mx-10 px-10 md:px-7 rounded-md transition-all duration-500 hover:scale-95 hover:shadow-md small: scale-95";

  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  //to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  //to toggle the mobile menu
  const toggleMobileMenu = (event) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //to close the mobile menu when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".sidebar")) {
        closeMobileMenu();
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener("click", handleOutsideClick, false);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick, false);
    };
  }, [isMobileMenuOpen]);

  const NavLinkWithClose = (props) => (
    <NavLink {...props} onClick={closeMobileMenu}>
      {props.children}
    </NavLink>
  );

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    setUser(null);
    navigate("/login");
    closeMobileMenu();
  };

  return (
    <div className={"min-h-screen " + theme}>
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <ion-icon name="menu-outline" className="text-3xl"></ion-icon>
      </button>
      <div
        className={
          "sidebar fixed inset-y-0 left-0 z-10 w-56 overflow-auto transition-all duration-500 transform backdrop-blur-sm shadow-lg md:relative md:translate-x-0 " +
          (isMobileMenuOpen ? "translate-x-0" : "-translate-x-full") +
          " " +
          theme
        }
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: isHovered ? "14rem" : "4.5rem",
          backgroundColor: isHovered ? "white" : undefined,
        }}
      >
        <div
          className={
            "flex h-screen flex-col justify-between pt-2 pb-4 color-bg " + theme
          }
        >
          <div className={"color-bg " + theme}>
            <a href={`/profile/${user.userName}`} className="cursor-pointer">
              <div className="w-max p-2.5">
                <UserAvatar
                  profileImageUrl={user.profilepic}
                  isOnline={true}
                  size="w-11 h-11"
                  indicatorPosition="bottom-0 right-0"
                />
              </div>
            </a>
            <ul className="px-7 font-medium tracking-wide">
              {/* Updates */}
              <li className="min-w-max group">
                <NavLinkWithClose
                  to="/homepage"
                  className={({ isActive }) =>
                    isActive
                      ? `${activeElement} active-nav-link`
                      : nonActiveElement
                  }
                >
                  <ion-icon
                    name="home-outline"
                    className={"text-2xl " + theme}
                  ></ion-icon>
                  <span style={{ opacity: isHovered ? 1 : 0 }}>Home</span>
                </NavLinkWithClose>

                {/* Friends */}
              </li>
              <li className="min-w-max">
                <NavLinkWithClose
                  to="/manageprofile"
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="settings-outline"></ion-icon>
                  <span style={{ opacity: isHovered ? 1 : 0 }}>
                    Manage Profile
                  </span>
                </NavLinkWithClose>

                {/* Chat */}
              </li>
              <li className="min-w-max">
                <NavLinkWithClose
                  to={`/profile/${user.userName}`}
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="chatbubbles"></ion-icon>
                  <span style={{ opacity: isHovered ? 1 : 0 }}>Chat</span>
                </NavLinkWithClose>
              </li>

              {/* Ai helper */}
              <li className="min-w-max">
                <NavLinkWithClose
                  to={`/chatbot`}
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="help-buoy"></ion-icon>
                  <span style={{ opacity: isHovered ? 1 : 0 }}>AI Helper</span>
                </NavLinkWithClose>
              </li>

              {/* About */}
              <li className="min-w-max">
                <NavLinkWithClose
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? activeElement : nonActiveElement
                  }
                >
                  <ion-icon name="log-out"></ion-icon>
                  <span
                    onClick={handleLogout}
                    style={{ opacity: isHovered ? 1 : 0 }}
                  >
                    Log out
                  </span>
                </NavLinkWithClose>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//props validation
Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
