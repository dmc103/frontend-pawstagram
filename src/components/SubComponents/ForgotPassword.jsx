import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="bg-pawBgFour min-h-screen flex flex-col items-center justify-center sm:auto sm: px-6">
      <div className="bg-amber-50 p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg max-w-2xl sm: m-auto">
        <h2 className="text-center text-slate-900 mb-6 font-medium text-3xl hover:text-indigo-800">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-amber-50 rounded-lg mb-5 border border-slate-700 hover:bg-amber-200"
            placeholder="Enter email"
            autoFocus
          />
          <button
            type="submit"
            className="mt-5 h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-lg mb-2 hover:text-white hover:font-semibold hover:border-1 border-amber-100"
          >
            Send reset link
          </button>
          {message && <p className="text-center mt-4">{message}</p>}
        </form>
        <div className="text underline text-end text-sm">
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
