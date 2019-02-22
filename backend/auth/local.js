const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/fumblr");

passport.use(
  new LocalStrategy((username, password, done) => {
    db.one("SELECT * FROM users WHERE name = ${name}", {
      name: name
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
