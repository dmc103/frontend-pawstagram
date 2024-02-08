import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function FriendsLists({ currentUser }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      if (currentUser && currentUser.following.length > 0) {
        try {
          const response = await axios.post(
            `${API_URL}/user/friends`,
            {
              userIds: currentUser.following,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
          );
          setFriends(response.data);
        } catch (error) {
          console.log("Error fetching friends data:", error);
        }
      }
    };
    fetchFriends();
  }, [currentUser]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Friends List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <div
            key={friend._id}
            className="bg-white rounded-lg border-t-8 border-pawBgFour p-4 flex flex-col justify-between shadow-md"
          >
            <div className="text-sm font-bold font-sans mb-2">
              {friend.userName}
            </div>
            <div className="text-gray-400 text-sm">{friend.bio}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Props validation
FriendsLists.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default FriendsLists;
