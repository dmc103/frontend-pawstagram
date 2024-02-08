import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterPage from "./RegisterPage";
import PropTypes from "prop-types";
import "../index.css";

function LandingPage({ onLoginSuccess }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-sm mx-auto p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-indigo-900">
            Welcome to Your App
          </h2>
          <p className="mt-2 text-sm text-indigo-900">Log in or Register</p>
        </div>
        <div className="bg-white py-10 px-2 shadow sm:rounded-lg sm:px-10">
          <div className="relative space-y-6">
            <LoginForm onLoginSuccess={onLoginSuccess} onFlip={toggleFlip} />
            <RegisterPage toggleFlip={toggleFlip} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Prop validation
LandingPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LandingPage;
