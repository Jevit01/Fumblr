var express = require("express");
var router = express.Router();
const {
  getOneLike,
  getAllLikes,
  createLike,
  deleteLike
} = require("../db/Queries/likesQ.js");

router.get("/:id", getOneLike);
router.get("/", getAllLikes);
router.post("/", createLike);
router.delete("/:id", deleteLike);

module.exports = router;
