// controllers/signupController.js
import { createUser } from '../services/signupServices.js';

export const signupController = async (req, res) => {
  try {
    const { username, email, password, bio } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const user = await createUser({ username, email, password, bio });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// controllers/signupController.js
// import { generateToken } from "../utils/generateToken.js";
// import { supabase } from "../services/supabaseClient.js";

// export const signupController = async (req, res) => {
//   try {
//     const { email, password, fullName } = req.body;

//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password
//     });

//     if (error) return res.status(400).json({ message: error.message });

//     // ✅ generate JWT token
//     const token = generateToken(data.user.id);

//     return res.status(201).json({
//       message: "Signup successful",
//       user: data.user,
//       token, // ✅ send token to frontend
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
