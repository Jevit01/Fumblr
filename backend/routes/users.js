var express = require("express");
var router = express.Router();
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");
const {
  getOneUser,
  getAllUsers,
  createUser,
  editUser,
  isLoggedIn,
  loginUser,
  logoutUser
} = require("../db/Queries/usersQ.js");

router.get("/:id", getOneUser);
router.get("/", getAllUsers);
router.patch("/:id", editUser);
router.post("/new", createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.post("/logout", loginRequired, logoutUser);
router.post("/isLoggedIn", isLoggedIn);

module.exports = router;
