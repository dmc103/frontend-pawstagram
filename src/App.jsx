import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginForm from './components/LoginForm';
import { UserProvider } from './contexts/UserContext';
import UserProfile from './components/SubComponents/UserProfile';



function App () {
  const handleLoginSuccess = () => {
      console.log('Login successful!');
     
  };

  return (
    <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </UserProvider>
    </Router>
  );
}
  

export default App;




