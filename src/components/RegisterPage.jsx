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
      <div className="max-w-md w-full sm:w-96 space-y-8 p-10 bg-pawBgFour rounded-xl shadow-lg hi-greet-bg">
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
              {/* Form inputs with labels */}
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900"
                >
                  Sign Up
                </button>
              </div>
            </form>
            {/* Login link */}
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

// Props validation
RegisterPage.propTypes = {
  toggleFlip: PropTypes.func.isRequired,
};

export default RegisterPage;
