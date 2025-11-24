// services/signupService.js
import { createClient } from '@supabase/supabase-js';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY);

/**
 * Create a new user in Supabase
 * @param {Object} param0
 * @param {string} param0.username
 * @param {string} param0.email
 * @param {string} param0.password
 * @param {string} [param0.bio]
 * @returns user object
 */
export const createUser = async ({ username, email, password, bio }) => {
  // Hash password
  const hashedPassword = await bcryptjs.hash(password, 10);

  // Insert user into Supabase "users" table
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        username,
        email,
        password: hashedPassword,
        bio: bio || null,
      },
    ])
    .select() // return inserted row
    .single();

  if (error) throw new Error(error.message);

  return data;
};
