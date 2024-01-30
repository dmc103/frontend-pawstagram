import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    try {
      const response = await fetch(
        "http://localhost:5005/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

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
    <div className="bg-pawBgFour sm: min-h-screen flex flex-col items-center justify-center">
      <div className="bg-amber-50 p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg max-w-2xl sm: m-auto">
        <h2 className="text-center text-slate-900 mb-6 font-medium text-3xl hover:text-indigo-800">
          Forgot Password
        </h2>
        <form
          onSubmit={handleSubmit}
          className="form bg-white p-6 my-10 relative"
        >
          <div className="flex flex-col">
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
            />
          </div>
          <button
            type="submit"
            className="mt-5 h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-lg mb-2 hover:text-white hover:font-semibold hover:border-1 border-amber-100"
          >
            Send Reset Link
          </button>
          {message && <p className="text-center mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
