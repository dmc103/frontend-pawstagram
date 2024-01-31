import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { countries } from "countries-list";
import ProfilePicUploader from "../ProfilePicUploader";
import UserAvatar from "./UserAvatar";

function ManageProfile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`/profile/${user.userName}`);
  };

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    country: "",
  });

  const countryNames = Object.values(countries).map((country) => country.name);

  useEffect(() => {
    if (user) {
      setFormData({
        userName: user.userName || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        bio: user.bio || "",
        country: user.country || "",
      });
    }
    setLoading(false);
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // tp update the user's profile data on the server
      // await axios.put(`/api/users/${user._id}`, formData);
      const response = await axios.patch(
        `http://localhost:5005/user/${user._id}/update`,
        formData
      );
      setUser(response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleUploadImage = async (newImageUrl) => {
    // console.log("THIS IS newImageUrl", newImageUrl);

    const updatedUser = {
      ...user,
      profilepic: newImageUrl,
    };

    try {
      const response = await axios.patch(
        `http://localhost:5005/user/${user._id}/update`,
        updatedUser
      );
      setUser(response.data);

      console.log("Profile is updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
      console.log("Error updating profile:", error.response.data);
    }
  };

  return (
    <div className="bg-pawBgFive sm: min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        {!loading && user && (
          <UserAvatar
            profileImageUrl={user.profilepic}
            isOnline={true}
            size="w-20 h-20"
            indicatorPosition="top-14 start-16"
          />
        )}

        <ProfilePicUploader onImageUpload={handleUploadImage} />
      </div>
      <div className="max-w-md w-full space-y-8 p-10 bg-pawBgFour rounded-xl shadow-lg manage-bg">
        <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleInputChange}>
              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="text"
                  name="userName"
                  id="username"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={formData.userName}
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="username"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  Username
                </label>
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={formData.firstName}
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="firstname"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  First Name
                </label>
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={formData.lastName}
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="lastname"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  Last Name
                </label>
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="email"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  Email
                </label>
              </div>
              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <textarea
                  type="bio"
                  name="bio"
                  id="bio"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>

                <label
                  htmlFor="bio"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  Bio
                </label>
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <label
                  htmlFor="country"
                  className="absolute top-1 bottom-6 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  Country
                </label>
                <select
                  id="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 bg-amber-50 rounded-md"
                >
                  {countryNames.map((countryName) => (
                    <option key={countryName} value={countryName}>
                      {countryName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900"
                >
                  Save Changes
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleCancel}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900"
                >
                  Cancel
                </button>
                <div className="relative flex justify-center text-sm">
                  <div className="px-2 mt-6 bg-white text-gray-500">
                    Want to manage your password, too?
                    <div className="test-container">
                      <Link to="/reset-password">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500 text-center"
                        >
                          Click here
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProfile;
