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
    <div className="radial-gradient-bg">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <LoginForm onLoginSuccess={onLoginSuccess} onFlip={toggleFlip} />
          </div>
          <div className="flip-card-back">
            <RegisterPage toggleFlip={toggleFlip} />
          </div>
        </div>
      </div>
    </div>
  );
}

//Prop validation
LandingPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LandingPage;
