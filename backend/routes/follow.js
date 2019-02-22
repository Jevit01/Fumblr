var express = require("express");
var router = express.Router();
const {
  getAllFollows,
  getAllFollowersForOneUser,
  addFollow,
  deleteFollow
} = require("../db/Queries/followQ.js");

router.get("/", getAllFollows);
router.get("/:id", getAllFollowersForOneUser);
router.post("/", addFollow);
router.delete("/:id", deleteFollow);

module.exports = router;
