import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { id, token } = useParams();
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords don't match.");
    } else if (!passwordRegex.test(newPassword)) {
      setMessage(
        "Password must have at least 3 characters and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    } else {
      try {
        const response = await axios.post(
          `http://localhost:5005/auth/reset-password/${id}/${token}`,
          { newPassword }
        );
        console.log(response.data);
        setMessage("Password successfully changed. Redirecting to ");
        setTimeout(() => {
          navigate("/manageprofile");
        }, 3000);
      } catch (error) {
        console.error("Error changing password:", error);
        setMessage("Failed to change password. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg max-w-2xl m-auto bg-white">
        <h2 className="text-center text-slate-900 mb-6 font-medium text-3xl hover:text-indigo-800">
          Change Password
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="new-password" className="font-semibold"></label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 mb-5 border bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="New password"
            autoFocus
            required
          />
          <label htmlFor="confirm-password" className="font-semibold"></label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 mb-5 border bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Confirm password"
            required
          />
          <p className="text-red-600 text-center font-normal">{message}</p>
          <button
            type="submit"
            className="h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-full rounded-lg mb-2 hover:text-white hover:font-semibold hover:border-1 border-amber-100"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
