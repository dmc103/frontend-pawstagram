import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import logo from "../assets/pawstagram.jpg";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLoginSuccess }) {
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
    <div className="min-h screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full space-y-8 p-10 bg-pawBgFour rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-indigo-900">
            WELCOME BACK
          </h2>
          <p className="mt-2 text-sm text-gray-600">You need to Log In first</p>
          <div>
            <br />
            <img
              src={logo}
              alt="Pawstagram logo"
              className="mx-auto w-32 sm:w-48 md:w-56 lg:w-64 h-auto"
            />

            <h1 className="text-xl font-bold my-4 text-gray-600">Pawstagram</h1>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            name="password"
            className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

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
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

//props validation
LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
