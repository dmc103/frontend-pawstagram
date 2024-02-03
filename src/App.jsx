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
import ForgotPassword from "./components/SubComponents/ForgotPassword";
import ManageProfile from "./components/SubComponents/ManageProfile";
import ResetPassword from "./components/SubComponents/ResetPassword";

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
            <Route path="/manageProfile" element={<ManageProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        </ThemeProviderWrapper>
      </UserProvider>
    </Router>
  );
}

export default App;
