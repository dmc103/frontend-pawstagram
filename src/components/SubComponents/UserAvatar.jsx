import profilePic from "../../assets/samprofPic.jpg";
import PropTypes from "prop-types";

function UserAvatar({
  profileImageUrl,
  isOnline,
  size = "w-14 h-14",
  indicatorPosition = "top-10 start-11",
  indicatorSize = "w-3.5 h-3.5",
  className,
}) {
  const indicatorColor = isOnline ? "bg-green-500" : "bg-gray-500";

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`rounded-full ${size} overflow-hidden`}>
        <img
          src={profileImageUrl || profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute ${indicatorPosition} ${indicatorSize} ${indicatorColor} border-2 border-white rounded-full`}
        ></div>
      </div>
    </div>
  );
}

//props validation
UserAvatar.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  size: PropTypes.string,
  indicatorPosition: PropTypes.string,
  indicatorSize: PropTypes.string,
  profileImageUrl: PropTypes.string,
  className: PropTypes.string,
};

export default UserAvatar;
