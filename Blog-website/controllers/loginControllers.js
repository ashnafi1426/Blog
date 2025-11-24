import { loginService } from "../services/loginServices.js";

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        const result = await loginService(email, password);

        res.status(200).json({
            message: "Login successful",
            token: result.token,
            user: result.user,
        });

    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

export default loginUser;
