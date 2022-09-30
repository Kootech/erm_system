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
router.post("/", registerUser);
router.post("/", loginUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
