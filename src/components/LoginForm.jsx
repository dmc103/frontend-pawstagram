import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import logo from "../assets/pawstagram.png";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLoginSuccess, onFlip }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await axios.post(
        "http://localhost:5005/auth/login",
        {
          email,
          password,
        }
      );

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
          "http://localhost:5005/user/status",
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
      <div className="max-w-md w-full space-y-8 p-10 bg-pawBgFour rounded-xl shadow-lg paw-print-bg">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-bold text-indigo-900">
            Welcome back!
          </h2>
          <p className="mt-2 text-sm text-indigo-900">Log in here</p>

          <br />
          <div>
            <img
              src={logo}
              alt="Pawstagram logo"
              className="relative mx-auto w-45 sm:w-48 md:w-56 lg:w-64 h-auto"
            />
          </div>
        </div>
        <div className=" bg-white py-10 px-2 shadow sm:rounded-lg sm:px-10">
          <form className=" relative space-y-6" onSubmit={handleSubmit}>
            <div className="relative border border-gray-300 bg-amber-50 rounded-md floating-label-container">
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-md focus:outline-none"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label
                htmlFor="email"
                className="absolute left-1 top-2 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                style={{
                  transform: email
                    ? "translateY(-1.5rem) scale(0.75)"
                    : undefined,
                }}
              >
                Email address
              </label>
            </div>

            <div className="relative border border-gray-300 bg-amber-50 rounded-md mt-4 floating-label-container">
              <input
                type="password"
                name="password"
                className="w-full p-3 rounded-md focus:outline-none"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />

              <label
                htmlFor="password"
                className="absolute left-1 top-3 text-gray-500 pointer-events-none transition-all transform -translate-y-6 scale-75"
                style={{
                  transform: password
                    ? "translateY(-1.5rem) scale(0.50)"
                    : undefined,
                }}
              >
                Password
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none"
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
