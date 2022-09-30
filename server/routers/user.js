const express = require("express");

const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controllers/user");

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
