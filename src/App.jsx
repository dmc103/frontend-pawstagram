import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginForm from '/src/components/LoginForm';


function App () {
  const handleLoginSuccess = () => {
      console.log('Login successful!');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
  

export default App;


