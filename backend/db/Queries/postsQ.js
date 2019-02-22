const { db } = require("./Connect.js");

const getOnePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one("SELECT * FROM posts WHERE id=$1", [postId])
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT A POST!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllPosts = (req, res, next) => {
  db.any("SELECT * FROM posts")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT POSTS"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllPostsFromOneUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    "SELECT * FROM posts JOIN users ON (users.id = posts.users_id) WHERE users.id=$1",
    [userId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT USER POSTS"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getPostsLikes = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.any(
    "SELECT * FROM posts JOIN likes ON (likes.posts_id = posts.id) WHERE posts.id=$1",
    [likeId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT POSTS LIKES"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createPost = (req, res, next) => {
  db.none("INSERT INTO posts(image, body)VALUES(${image}, ${body})", req.body)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "YOU MADE A POST"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const editPost = (req, res) => {
  db.none("UPDATE posts SET image=${image}, body=${body} WHERE id=${id}", {
    image: req.body.image,
    body: req.body.body,
    id: parseInt(req.params.id)
  }).then(() => {
    res.status(200).json({
      status: "Success",
      message: "EDIT THAT POST!"
    });
  });
};

module.exports = {
  getOnePost,
  getAllPosts,
  getAllPostsFromOneUser,
  getPostsLikes,
  createPost,
  editPost
};
