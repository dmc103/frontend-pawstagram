import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function RegisterPage({ toggleFlip }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

    if (password !== confirmPassword) {
      alert("Passwords don't match, try again");
      return;
    }

    console.log("Register form submitted");

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        email,
        userName,
        firstName,
        lastName,
        password,
        confirmPassword,
      });
      console.log(response.data);
      setRegisterSuccess(true);

      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      if (error.response) {
        console.log("Register error :", error.response.data);
        alert(error.response.data.message);
      } else if (error.request) {
        console.log("Register error :", error.request);
        alert("An error occurred while submitting the form");
      } else {
        console.log("Error: ", error.message);
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-10 bg-pawBgFour rounded-xl shadow-lg hi-greet-bg">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <p className="mt-16 text-center text-sm text-indigo-900">
            {registerSuccess
              ? "REGISTRATION SUCCESSFUL"
              : "Welcome, register here!"}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label
                  htmlFor="email"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                  style={{
                    transform: email ? "translateY(-1rem)" : undefined,
                  }}
                >
                  Email address
                </label>
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />

                <label
                  htmlFor="username"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                  style={{
                    transform: userName ? "translateY(-1rem)" : undefined,
                  }}
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />

                <label
                  htmlFor="firstname"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                  style={{
                    transform: firstName ? "translateY(-1rem)" : undefined,
                  }}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />

                <label
                  htmlFor="lastname"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                  style={{
                    transform: lastName ? "translateY(-1rem)" : undefined,
                  }}
                >
                  Last Name
                </label>
              </div>

              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />

                <label
                  htmlFor="password"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                  style={{
                    transform: password ? "translateY(-1rem)" : undefined,
                  }}
                >
                  Password
                </label>
              </div>
              <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
                  placeholder=""
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <label
                  htmlFor="password"
                  className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                  style={{
                    transform: password ? "translateY(-1rem)" : undefined,
                  }}
                >
                  Confirm Password
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <div className="px-2 bg-white text-gray-500">
                    Have an account?
                    <div className="test-container">
                      <button
                        type="button"
                        onClick={toggleFlip}
                        className="font-medium text-indigo-600 hover:text-indigo-500 text-center"
                      >
                        Login Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//props validation
RegisterPage.propTypes = {
  toggleFlip: PropTypes.func.isRequired,
};

export default RegisterPage;
