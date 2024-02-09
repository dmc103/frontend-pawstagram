import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import PropTypes from "prop-types";
import logo from "../assets/pawstagram.png";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLoginSuccess, onFlip }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      console.log(loginResponse.data);

      const loginData = loginResponse.data;

      if (loginResponse.status === 200) {
        //storing the token in local storage..
        localStorage.setItem("authToken", loginData.authToken);
        localStorage.setItem("userId", loginData.userId);
        localStorage.setItem("userName", loginData.userName);
        localStorage.setItem("country", loginData.country);

        //update online status
        await axios.post(
          `${API_URL}/user/status`,
          {
            userId: loginData.userId,
            isOnline: true,
          },
          {
            headers: {
              Authorization: `Bearer ${loginData.authToken}`,
            },
          }
        );
        const userProfile = loginResponse.data;

        setUser(userProfile);
        navigate("/homepage");

        onLoginSuccess(loginData.authToken);
      } else {
        // handle error
        alert(loginData.message);
      }
    } catch (error) {
      if (error.response) {
        console.log("Login error :", error.response.data);
        alert(error.response.data.message);
      } else {
        console.log("Error during login process :", error.message);
        alert("An error occurred during login, please try again");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-4 bg-pawBgFour rounded-xl shadow-lg md:mx-auto md:max-w-2xl lg:max-w-3xl">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-bold text-indigo-900 animate-pulse">
            Welcome back!
          </h2>
          <p className="mt-2 text-sm text-indigo-900">Log in here</p>

          <br />
          <div>
            <img
              src={logo}
              alt="Pawstagram logo"
              className="mx-auto w-48 h-auto"
            />
          </div>
        </div>
        <div className="bg-white py-10 px-2 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none"
            >
              Log in
            </button>
          </form>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={onFlip}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//props validation
LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
  onFlip: PropTypes.func.isRequired,
};

export default LoginForm;
