import profilePic from "../../assets/samprofPic.jpg";
import PropTypes from "prop-types";

function UserAvatar({ isOnline }) {
  const indicatorColor = isOnline ? "bg-green-500" : "bg-gray-500";
  return (
    <div className="relative inline-block">
      <div className="rounded-full w-14 h-14 overflow-hidden">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute top-10 start-11 w-3.5 h-3.5 ${indicatorColor} border-2 border-white rounded-full`}
        ></div>
      </div>
    </div>
  );
}

//props validation
UserAvatar.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};

export default UserAvatar;
