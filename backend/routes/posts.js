var express = require("express");
var router = express.Router();
const {
  getOnePost,
  getAllPosts,
  getAllPostsFromOneUser,
  getPostsLikes,
  createPost,
  editPost
} = require("../db/Queries/postsQ.js");

router.get("/:id", getOnePost);
router.get("/", getAllPosts);
router.get("/users/:id", getAllPostsFromOneUser);
router.get("/likes/:id", getPostsLikes);
router.post("/", createPost);
router.patch("/:id", editPost);

module.exports = router;
