var express = require("express");
var router = express.Router();
const {
  getOneUser,
  getAllUsers,
  createUser,
  editUser
} = require("../db/Queries/usersQ.js");

router.get("/:id", getOneUser);
router.get("/", getAllUsers);
router.post("/", createUser);
router.patch("/:id", editUser);

module.exports = router;
