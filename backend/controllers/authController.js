const bcrypt = require("bcryptjs");
const {
  validateRegisterInput,
  validateLoginInput,
  generateToken,
} = require("../utils/authUtils");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { email, password, fullName, role } = req.body;

  try {
    // Validate input
    const validationErrors = validateRegisterInput({
      email,
      password,
      fullName,
      role,
    });
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errors: ["User already exists"] });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
      fullName,
      role,
    });

    await user.save();

    // Generate JWT
    const token = generateToken(user._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ errors: ["Internal server error"] });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    const validationErrors = validateLoginInput({ email, password });
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ errors: ["Invalid credentials"] });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ errors: ["Invalid credentials"] });
    }

    // Generate JWT
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ errors: ["Internal server error"] });
  }
};
