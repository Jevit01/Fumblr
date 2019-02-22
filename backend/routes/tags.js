var express = require("express");
var router = express.Router();
const {
  getOneTag,
  getAllTags,
  createTag,
  deleteTag
} = require("../db/Queries/tagsQ.js");

router.get("/:id", getOneTag);
router.get("/", getAllTags);
router.post("/", createTag);
router.patch("/:id", deleteTag);

module.exports = router;
