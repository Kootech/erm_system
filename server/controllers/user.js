const jwt = require("jsonwebtoken");
const expressAsync = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const registerUser = expressAsync(async (req, res) => {
  const { username, email, password, roles } = req.body;

  const availableUser = await User.findOne({ email });

  if (availableUser) {
    return res.status(400).send("user already exist");
  }

  if (!username || !email || !password || !roles) {
    res.status(400).json({ message: "all fields required" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashedpassword,
    roles,
  });

  res.status(201).json(user);
});

const loginUser = expressAsync(async (req, res) => {
  res.send(`get user working`);
});

const updateUser = expressAsync(async (req, res) => {
  res.send(`update user working`);
});

const deleteUser = expressAsync(async (req, res) => {
  res.send(`delete user working`);
});

const getUsers = expressAsync(async (req, res) => {
  res.send(`get users working`);
});
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser, updateUser, deleteUser, getUsers };
