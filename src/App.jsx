import { UserProvider } from "./contexts/UserContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";
import "ionicons";

import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import ResetPasswordPage from "./components/ResetPasswordPage";

function App() {
  const handleLoginSuccess = () => {
    console.log("Login successful!");
  };

  return (
    <Router>
      <UserProvider>
        <ThemeProviderWrapper>
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route
              path="/login"
              element={<LandingPage onLoginSuccess={handleLoginSuccess} />}
            />
            <Route path="/homepage" element={<UserHome />} />
            <Route path="/profile/:userName" element={<UserProfile />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:id/:token" element={<ResetPasswordPage />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        </ThemeProviderWrapper>
      </UserProvider>
    </Router>
  );
}

export default App;
