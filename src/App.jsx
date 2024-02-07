import { UserContext } from "./contexts/UserContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";
import "ionicons";
import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import ForgotPassword from "./components/SubComponents/ForgotPassword";
import ManageProfile from "./components/SubComponents/ManageProfile";
import ResetPassword from "./components/SubComponents/ResetPassword";

function App() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    console.log("Login successful!");
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");

    if (authToken) {
      setUser({
        authToken,
        userId,
      });
      navigate("/homepage");
    }
  }, [setUser, navigate]);

  return (
    <ThemeProviderWrapper>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={<LandingPage onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/homepage" element={<UserHome />} />
        <Route path="/profile/:userName" element={<UserProfile />} />
        <Route path="/manageProfile" element={<ManageProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </ThemeProviderWrapper>
  );
}

export default App;
