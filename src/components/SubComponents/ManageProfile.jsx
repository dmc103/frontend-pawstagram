import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

function ManageProfile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
    country: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (user && user._id) {
          const response = await axios.get(`/api/users/${user._id}`);
          setFormData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // tp update the user's profile data on the server
      await axios.put(`/api/users/${user._id}`, formData);

      setUser({ ...user, ...formData });

      //to redirect to user profile page
      history.push("/user-profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-10 bg-pawBgFour rounded-xl shadow-lg manage-bg">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <p className="mt-16 text-center text-sm text-indigo-900">
            Manage Profile
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <label
                  className="absolute text-gray-500 pointer-events-none -translate-y-6 scale-75"
                  htmlFor="username"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <label
                  className="absolute text-gray-500 pointer-events-none -translate-y-6 scale-75"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <label
                  className="absolute text-gray-500 pointer-events-none -translate-y-6 scale-75"
                  htmlFor="firstname"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstname"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <label
                  className="absolute text-gray-500 pointer-events-none -translate-y-6 scale-75"
                  htmlFor="lastname"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastname"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <label
                  className="absolute text-gray-500 pointer-events-none -translate-y-6 scale-75"
                  htmlFor="bio"
                >
                  Bio:
                </label>
                <input
                  type="text"
                  id="bio"
                  name="bio"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <label
                  className="absolute text-gray-500 pointer-events-none -translate-y-6 scale-75"
                  htmlFor="country"
                >
                  Country:
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProfile;
