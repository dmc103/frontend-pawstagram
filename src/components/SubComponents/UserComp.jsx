import PropTypes from "prop-types";
import UserAvatar from "./UserAvatar";
import { useContext } from "react";
import { ThemeContext } from "/src/contexts/ThemeContext.jsx";


import Card from "./Card";

function UserComp({ user, currentUser, onAddFriend }) {
  const { theme } = useContext(ThemeContext);
  const isFriend =
    currentUser &&
    currentUser.following &&
    currentUser.following.includes(user._id);

  return (
    <Card>
      <div className={"group before:hover:scale-95  before:hover:w-80 before:hover:h-44 before:hover:rounded-b-xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-50 h-42 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden mb-5 top-bar " + theme}>
        <div className="relative w-20 h-20 mt-8">
          <div className={"absolute inset-0 bg-pawBgFour rounded-full border-4 border-slate-50 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 z-0 color-bg " + theme}></div>

          <div className="absolute inset-0 z-10">
            <UserAvatar
              profileImageUrl={user.profilepic}
              isOnline={true}
              size="w-20 h-20"
              indicatorPosition="absolute top-14 left-16"
              className="group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500"
            />
          </div>
        </div>

        <span className="text-md font-semibold">{user.userName}</span>
        <div className={"z-10  group-hover:-translate-y-10 transition-all duration-500 " + theme}>
          <p className="text-sm text-gray-600 w-60 before:hover:h-44">
            {user.bio}
          </p>
        </div>

        {!isFriend && (
          <button
            className={"bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500 button2 " + theme}
            onClick={() => onAddFriend(user._id)}
          >
            Follow
          </button>
        )}
      </div>
    </Card>
  );
}

//prop validation
UserComp.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  onAddFriend: PropTypes.func.isRequired,
};

export default UserComp;
