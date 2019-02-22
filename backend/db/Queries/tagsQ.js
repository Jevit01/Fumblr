const { db } = require("./Connect.js");

const getOneTag = (req, res, next) => {
  let tagId = parseInt(req.params.id);
  db.one("SELECT * FROM tags WHERE id=$1", [tagId])
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT A TAG!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllTags = (req, res, next) => {
  db.any("SELECT * FROM tags")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT TAGS"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createTag = (req, res, next) => {
  db.none(
    "INSERT INTO tags(posts_id, name)VALUES(${posts_id}, ${name})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "YOU TAGGED A POST"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteTag = (req, res) => {
  let tagId = parseInt(req.params.id);
  db.result("DELETE FROM tags WHERE id=$1", [tagId]).then(result => {
    res.status(200).json({
      status: "Success",
      message: "DELETE THAT SHIT",
      result: result
    });
  });
};

module.exports = { getOneTag, getAllTags, createTag, deleteTag };
