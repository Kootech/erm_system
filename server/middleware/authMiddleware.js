const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const validate = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers.authorization.split(" ")[1]);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);

      const decoded = jwt.verify(token, process.env.JWT);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: "unauthorized" });
      console.log(error);
    }
  }
  if (!token) {
    res.status(401).json({ message: "Unauthorized user" });
  }
});

module.exports = validate;
