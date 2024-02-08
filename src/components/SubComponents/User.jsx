import { useState, useEffect } from "react";
import axios from "axios";
import UserComp from "./UserComp";
import PropTypes from "prop-types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function User({ currentUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (currentUser && currentUser._id) {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`${API_URL}/user/users`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          });
          setUsers(response.data);
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      };

      fetchUsers();
    }
  }, [currentUser]);

  const addFriend = async (userId) => {
    try {
      await axios.put(
        `${API_URL}/user/${userId}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      console.log("Friend added");

      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-around items-center">
      {users.map((user) => (
        <UserComp key={user._id} user={user} onAddFriend={addFriend} />
      ))}
    </div>
  );
}

// Props validation
User.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default User;
