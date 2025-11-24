// routes/authRoutes.js
import express from "express";
import { signup, login } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// ✅ Protected test route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    userId: req.user,
  });
});

export default router;
