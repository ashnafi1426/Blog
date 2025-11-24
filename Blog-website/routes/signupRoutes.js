// routes/signupRoute.js
import express from 'express';
import { signupController } from '../controllers/signupController.js'; // <-- add .js

const router = express.Router();
router.post('/', signupController);

export default router;
