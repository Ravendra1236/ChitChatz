const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.get("/", protect, allUsers);
router.post("/login", loginUser);

module.exports = router;
