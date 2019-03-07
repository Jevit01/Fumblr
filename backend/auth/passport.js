const passport = require("passport");
const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/fumblr");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, { email: user.email, id: user.id, profilePic: user.profilePic });
  });

  passport.deserializeUser((user, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: user.email
    })
      .then(user => {
        done(null, {
          email: user.email,
          id: user.id,
          profilePic: user.profilePic
        });
      })
      .catch(err => {
        done(err, null);
      });
  });
};
