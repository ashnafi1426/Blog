import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api"; // backend URL

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data; // { message: "User created successfully", user: {...} }
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Signup failed");
    } else {
      throw new Error("Network error or server is down");
    }
  }
};
