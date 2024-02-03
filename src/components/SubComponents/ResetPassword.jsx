import { useState } from "react";

const ResetPassword = () => {
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
        setMessage('Passwords should match.')
    }
  };

  return (
    <div className="bg-indigo-900 sm: min-h-screen flex flex-col items-center justify-center">
      <div className="bg-amber-50 p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg max-w-2xl sm: m-auto">
      <h2 className="text-center text-slate-900 mb-6 font-medium text-3xl hover:text-indigo-800">Change Password</h2>
      <br />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col"
        >
            <label htmlFor="new-password" className="font-semibold">
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 bg-amber-50 rounded-lg mb-5 border border-slate-700 hover:bg-amber-200"
              placeholder="New password"
              autoFocus
            //   required
            />
            <label htmlFor="confirm-password" className="font-semibold">
            </label>

            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 bg-amber-50 rounded-lg mb-5 border border-slate-700 hover:bg-amber-200"
              placeholder="Confirm password"
            //   required
            />
            <p className="text-red-600 text-center font-normal">{message}</p>
            
            <br />

          <button
          type="submit"
          className="mt-5 h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-lg mb-2 hover:text-white hover:font-semibold hover:border-1 border-amber-100">Send</button>

        </form>
        <br />
      </div>
    </div>
  );
};

export default ResetPassword;
