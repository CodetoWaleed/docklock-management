const jwt = require("jsonwebtoken");

// Validation function for registration
const validateRegisterInput = ({ email, password, fullName, role }) => {
  const errors = [];

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.push("Valid email is required");
  }

  if (!password || password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }

  if (!fullName || fullName.trim().length < 2) {
    errors.push("Full name must be at least 2 characters long");
  }

  if (!role || !["admin", "doctor", "staff"].includes(role)) {
    errors.push("Role must be one of: admin, doctor, staff");
  }

  return errors;
};

// Validation function for login
const validateLoginInput = ({ email, password }) => {
  const errors = [];

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.push("Valid email is required");
  }

  if (!password) {
    errors.push("Password is required");
  }

  return errors;
};

// Generate JWT token
const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = {
  validateRegisterInput,
  validateLoginInput,
  generateToken,
};
