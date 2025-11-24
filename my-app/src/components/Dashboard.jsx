// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Load user info from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token || !storedUser) {
      // If no token or user, redirect to login
      navigate("/");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [navigate]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  if (!user) return null; // Optional: show loader while checking
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}!</h1>
        <p className="text-gray-700 mb-6">Email: {user.email}</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
