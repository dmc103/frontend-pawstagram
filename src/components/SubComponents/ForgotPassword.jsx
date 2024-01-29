import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    try {
      const response = await fetch(
        "http://localhost:5005/auth/forgotPassword",
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
    <div className="container mx-auto">
      <form
        onSubmit={handleSubmit}
        className="form bg-white p-6 my-10 relative"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3"
        >
          Send Reset Link
        </button>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
