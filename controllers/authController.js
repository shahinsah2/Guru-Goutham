const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const generateToken = require("../utils/generateToken");

// Register user
exports.register = (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, hashedPassword], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error registering user", error: err });
    res.status(201).json({ message: "User registered successfully" });
  });
};

// Login user
exports.login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err)
      return res.status(500).json({ message: "Error logging in", error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid password" });

    const token = generateToken(user.id);
    res.status(200).json({ message: "Login successful", token });
  });
};

// Reset password
exports.resetPassword = (req, res) => {
  const { newPassword } = req.body;
  const hashedPassword = bcrypt.hashSync(newPassword, 8);
  const query = "UPDATE users SET password = ? WHERE id = ?";
  db.query(query, [hashedPassword, req.userId], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error resetting password", error: err });
    res.status(200).json({ message: "Password reset successfully" });
  });
};

// Change password
exports.changePassword = (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, [req.userId], (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error changing password", error: err });

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(oldPassword, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid old password" });

    const hashedPassword = bcrypt.hashSync(newPassword, 8);
    const updateQuery = "UPDATE users SET password = ? WHERE id = ?";
    db.query(updateQuery, [hashedPassword, req.userId], (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Error updating password", error: err });
      res.status(200).json({ message: "Password changed successfully" });
    });
  });
};
