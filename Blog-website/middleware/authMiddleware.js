// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token = req.headers.authorization;

  // ✅ Check if token exists and starts with Bearer
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // ✅ Get actual token value
    token = token.split(" ")[1];

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach user id to request
    req.user = decoded.id;

    next(); // ✅ continue to protected route
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
