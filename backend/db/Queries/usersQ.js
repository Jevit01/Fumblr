const { db } = require("./Connect.js");
const authHelpers = require("../../auth/helpers");

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
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    "INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password})",
    { name: req.body.name, email: req.body.email, password: hash }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
};

const loginUser = (req, res) => {
  res.json(req.user);
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({ name: req.user });
  } else {
    res.json({ name: null });
  }
};

const editUser = (req, res) => {
  db.none(
    "UPDATE users SET name=${name}, email=${email}, password=${password}, profilePic=${profilePic} WHERE id=${id}",
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profilePic: req.body.profilePic,
      id: parseInt(req.params.id)
    }
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "EDIT THAT USER!"
    });
  });
};

module.exports = {
  getOneUser,
  getAllUsers,
  createUser,
  editUser,
  loginUser,
  logoutUser,
  isLoggedIn
};
