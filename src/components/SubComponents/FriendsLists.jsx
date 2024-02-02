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
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend._id}>
            {friend.userName} - {friend.bio}
          </li>
        ))}
      </ul>
    </div>
  );
}

//props validation
FriendsLists.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default FriendsLists;
