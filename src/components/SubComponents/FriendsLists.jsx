import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function FriendsLists({ currentUser }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      if (currentUser && currentUser.following.length > 0) {
        try {
          const response = await axios.post(
            "http://localhost:5005/user/friends",
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
    <div>
      <h2 className="font-bold mb-4">Friends List</h2>
      <div>
        <ul>
          {friends.map((friend) => (
            <li
              key={friend._id}
              className="w-72 bg-white rounded-b-lg border-t-8 border-pawBgFour px-4 py-5 flex flex-col justify-around shadow-md"
            >
              <div className="text-sm font-bold font-sans">
                {friend.userName}
              </div>
              <div className="text-gray-400 text-sm">{friend.bio}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//props validation
FriendsLists.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default FriendsLists;
