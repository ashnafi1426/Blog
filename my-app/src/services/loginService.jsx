// src/services/loginService.js
import axios from "axios";

// Base URL of your backend
const API_URL = "http://localhost:4000/api/login";

export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    // Save token to localStorage
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    // Throw error to show in frontend
    throw new Error(
      error.response?.data?.message || "Login failed. Try again."
    );
  }
};
