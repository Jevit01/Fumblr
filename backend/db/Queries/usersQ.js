const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/fumblr");

const getOneUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id=$1", [userId])
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT A USER!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "YOU GOT USERS"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(name, email, password, profilePic)VALUES(${name}, ${email}, ${password}, ${profilePic})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "YOU MADE A USER"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const editUser = (req, res) => {
  db.none(
    "UPDATE users SET users_id=${users_id}, name=${name}, email=${email}, password=${password}, profilePic=${profilePic} WHERE id=${id}"
  );
};

module.exports = { getOneUser, getAllUsers, createUser, editUser };
