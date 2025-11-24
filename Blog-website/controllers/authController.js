// controllers/authController.js
import { supabase } from "../config/SupabaseClient.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email & password required" });
    }

    const { data, error } = await supbase.auth.signUp({
      email,
      password
    });

    if (error) return res.status(400).json({ message: error.message });

    const token = generateToken(data.user.id);

    return res.status(201).json({
      message: "Signup successful",
      user: data.user,
      token,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) return res.status(400).json({ message: error.message });

    const token = generateToken(data.user.id);

    res.status(200).json({
      message: "Login successful",
      user: data.user,
      token,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
