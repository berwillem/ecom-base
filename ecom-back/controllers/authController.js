const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// register function :
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  // validation :
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // checking if the user exsiste in the database :
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    // hashing password :
    const hashedPassword = await bcrypt.hash(password, 8);
    // creating the user with hashed password :
    // new user is a const that will be used to return the user created
    // User is the model
    const newuser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    // returning the user and status code :
    res.status(201).json(newuser);
  } catch (err) {
    // returning a status code and error message :
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, username, password } = req.body;

  // Check if required fields are provided
  if ((!email && !username) || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Find the user either by email or username
    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    // If user is not found
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, username: user.username }, // Payload data
      process.env.JWT_SECRET
    );

    // Set the token as an HTTP-only cookie
    // res.cookie("token", token, {
    //   httpOnly: true,
    // });

    // Respond with success message and basic user info
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all users :
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "cannot get users" });
  }
};
