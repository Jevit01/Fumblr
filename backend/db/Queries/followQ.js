const { db } = require("./Connect.js");

const getAllFollows = (req, res, next) => {
  db.any("SELECT * FROM follow")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT FOLLOWS"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllFollowersForOneUser = (req, res, next) => {
  let followId = parseInt(req.params.id);
  db.any(
    "SELECT * FROM follow JOIN users ON (users.id = follow.follower_id) WHERE users.id=$1",
    [followId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT FOLLOWERS"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addFollow = (req, res, next) => {
  db.none(
    "INSERT INTO follow(follower_id, following_id)VALUES(${follower_id}, ${following_id})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "YOU FOLLOWED"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteFollow = (req, res) => {
  let followId = parseInt(req.params.id);
  db.result("DELETE FROM follow WHERE id=$1", [followId]).then(result => {
    res.status(200).json({
      status: "Success",
      message: "DELETE THAT SHIT",
      result: result
    });
  });
};

module.exports = {
  getAllFollows,
  getAllFollowersForOneUser,
  addFollow,
  deleteFollow
};
