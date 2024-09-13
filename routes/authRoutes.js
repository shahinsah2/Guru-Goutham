const express = require("express");
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// Authentication Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/reset-password", verifyToken, authController.resetPassword);
router.post("/change-password", verifyToken, authController.changePassword);

// Master user Routes

module.exports = router;
