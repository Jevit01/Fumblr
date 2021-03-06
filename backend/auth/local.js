const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/fumblr");

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, {
            email: user.email,
            id: user.id,
            profilePic: user.profilePic
          });
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
