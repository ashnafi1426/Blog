// routes/loginRoutes.js
import express from 'express';
import loginUser from '../controllers/loginControllers.js'; // <-- note the .js at the end

const router = express.Router();

router.post('/', loginUser);

export default router;
