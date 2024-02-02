import PropTypes from "prop-types";

function UserComp({ user, currentUser, onAddFriend }) {
  const isFriend =
    currentUser &&
    currentUser.following &&
    currentUser.following.includes(user._id);

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div>
        <h2 className="text-lg font-semibold">{user.userName}</h2>
        <div>
          <p className="text-sm text-gray-600">{user.bio}</p>
        </div>
      </div>

      {!isFriend && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => onAddFriend(user._id)}
        >
          Follow
        </button>
      )}
    </div>
  );
}

//prop validation
UserComp.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  onAddFriend: PropTypes.func.isRequired,
};

export default UserComp;
