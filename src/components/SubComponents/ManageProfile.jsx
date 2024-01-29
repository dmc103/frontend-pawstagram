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
        <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleInputChange}>
              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value=""
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
                  type="firstname"
                  name="firstname"
                  id="firstname"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value=""
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
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value=""
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
                  value=""
                />

                <label
                  htmlFor="email"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  Email
                </label>
              </div>
              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="bio"
                  name="bio"
                  id="bio"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value=""
                />

                <label
                  htmlFor="bio"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                >
                  Bio
                </label>
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
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900"
                >
                  Cancel
                </button>
                <div className="relative flex justify-center text-sm">
                  <div className="px-2 mt-6 bg-white text-gray-500">
                    Want to manage your password, too?
                    <div className="test-container">
                      {/* todo: add link to change password page */}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500 text-center"
                      >
                        Click here
                      </button>
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
