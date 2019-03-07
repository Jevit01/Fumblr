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
  req.body.users_id = req.user.id;
  db.any(
    "SELECT body, image, users_id, profilePic, COUNT AS like_count, title, name FROM posts  FULL JOIN users ON posts.users_id = users.id  FULL JOIN tags ON tags.posts_id = posts.id FULL JOIN (SELECT COUNT(*), posts_id FROM likes GROUP BY posts_id) AS likes_count ON posts.id = likes_count.posts_id"
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
  req.body.users_id = req.user.id;
  console.log(req.user);
  db.none(
    "INSERT INTO posts(users_id, image, body)VALUES(${users_id},${image}, ${body})",
    req.body
  )
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
