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

  const refreshToken = generateRefreshToken(user.id);
  const day = 24 * 60 * 60 * 1000;

  res.cookie("JWT_REFRESH_TOKEN", refreshToken, {
    httpOnly: true,
    maxAge: day * 10,
  });

  const filter = { email: user.email };
  const token = { refreshToken: refreshToken };

  const change = await User.findOneAndUpdate(filter, token);

  console.log(change.email);

  res.status(201).json({
    _id: user._id,
    username,
    email,
    roles,
    accessToken: generateAccessToken(user._id),
    refreshToken,
  });
});

const loginUser = expressAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      accessToken: generateAccessToken(user._id),
    });
  } else {
    res.status(400);
  }
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

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: 60 * 15,
  });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN, {
    expiresIn: "10d",
  });
};

module.exports = { registerUser, loginUser, updateUser, deleteUser, getUsers };
