const { db } = require("./Connect.js");

const getOneLike = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.one("SELECT * FROM likes WHERE id=$1", [likeId])
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT A LIKE!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllLikes = (req, res, next) => {
  db.any("SELECT * FROM likes")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT LIKES"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createLike = (req, res, next) => {
  db.none(
    "INSERT INTO likes(posts_id, users_id)VALUES(${posts_id}, ${users_id})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "YOU LIKED A POST"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteLike = (req, res) => {
  let likeId = parseInt(req.params.id);
  db.result("DELETE FROM likes WHERE id=$1", [likeId]).then(result => {
    res.status(200).json({
      status: "Success",
      message: "DELETE THAT SHIT",
      result: result
    });
  });
};

module.exports = { getOneLike, getAllLikes, createLike, deleteLike };
