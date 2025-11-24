import { supabase } from "../config/SupabaseClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginService = async (email, password) => {
  // ✅ Get user by email from Supabase table "users"
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
    throw new Error("Invalid email or password");
  }

  // ✅ Compare password with hashed one
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid email or password");
  }

  // ✅ Create JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username
    }
  };
};
