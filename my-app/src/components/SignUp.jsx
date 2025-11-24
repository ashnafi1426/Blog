import React, { useState } from "react";
import { signupUser } from "../services/signupService.jsx"; // frontend service
import { useNavigate, Link } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend
      const data = await signupUser({
        username: fullName,
        email,
        password,
        bio: "", // optional
      });
      setMessage(data.message);
      setFullName("");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Sign Up
        </h2>

        {message && (
          <p className="text-center text-red-500 mb-4">{message}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>
          <p className="text-center text-gray-600 text-sm mt-3">
                      Do you have an account?
                      <Link
                        to="/"
                        className="text-blue-600 font-medium hover:underline ml-1"
                      >
                     login
                      </Link>
                    </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
