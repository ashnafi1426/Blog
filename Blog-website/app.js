// app.js
import express from 'express';
import dotenv from 'dotenv';
import signupRoute from './routes/signupRoutes.js';
import loginRoute from './routes/loginRoutes.js'
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

// Signup route
app.use('/api/signup', signupRoute);
app.use('/api/login',loginRoute)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
