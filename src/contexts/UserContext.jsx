import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

// create a context
export const UserContext = createContext();

// create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log("UserContext: ", user);

  useEffect(() => {
    // function to fetch user data from the API
    // getCurrentUserId() is a helper function defined below
    const currentUserId = getCurrentUserId();

    if (currentUserId) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`${API_URL}/${currentUserId}`);
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// a helper function to get the current user id from local storage
// this is used to fetch the user data from the API
function getCurrentUserId() {
  return localStorage.getItem("userId");
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
