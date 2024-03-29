import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { id, token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}/;
    try {
     if (newPassword !== confirmPassword) {
      setMessage("Passwords don't match.");
    }
     else if (!passwordRegex.test(newPassword) || !passwordRegex.test(confirmPassword)) {
      setMessage("Password must be at least 3 characters, have at least one uppercase and one lowercase letter and one number.")
     }
     else {
      // console.log("ok for now")
      const response = await axios.post(`${API_URL}/auth/reset-password/${id}/${token}`, confirmPassword);
      console.log(response.data);
      setNewPassword(confirmPassword);
      setMessage("Password changed. Redirecting to login...")
      setInterval(() => {
        navigate('/login')
      }, 3000);
     }
    } catch (err) {
      console.log(err);
      setMessage(err);
    }
  };

  return (
    <div className="bg-indigo-500 min-h-screen flex flex-col items-center justify-center sm:auto sm: px-6">
      <div className="bg-amber-50 p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg max-w-2xl sm: m-auto">
        <h2 className="text-center text-slate-900 mb-6 font-medium text-3xl hover:text-indigo-800">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
          </label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 bg-amber-50 rounded-lg mb-2 border border-slate-700 hover:bg-amber-200"
            placeholder="Type new password"
            autoFocus
            required
          />
           <label htmlFor="email" className="font-semibold">
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 bg-amber-50 rounded-lg mb-3 border border-slate-700 hover:bg-amber-200"
            placeholder="Confirm your password"
            required
          />
          <p className="text-red-600 text-center text-xs">{message}</p>
          <br />
          
          <button
            type="submit"
            className="mt-5 h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-lg mb-2 hover:text-white hover:font-semibold hover:border-1 border-amber-100"
          >
            Send
          </button>
        </form>
        <div className="text-decoration-line: underline text-end text-sm">
        <Link to="/register">
          Don't have an account yet?
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
