import React from "react";

const LogIn = ({
  email,
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  return (
    <>
      <div className="login">
        <div className="fumblr">
          <h1>Fumblr</h1>
        </div>
        <form>
          <input
            className="email"
            type="text"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <br />
          <input
            className="email"
            type="text"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <br />
          <button className="next">Next</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
