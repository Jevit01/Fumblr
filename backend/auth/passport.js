const passport = require("passport");
const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/fumblr");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.name);
  });

  passport.deserializeUser((name, done) => {
    db.one("SELECT * FROM users WHERE name = ${name}", {
      name: name
    })
      .then(user => {
        done(null, user.username);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
