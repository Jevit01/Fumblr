import React from "react";
// import { Link } from "react-router-dom";

const Register = ({
  name,
  email,
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  return (
    <>
      <div className="register">
        <div className="fumblr">
          <h1>Fumblr</h1>
        </div>
        <p>"We don't tumble, We Fumble"</p>
        <br />
        <form>
          <div className="regForm">
            <input
              className="reg"
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <input
              className="reg"
              type="text"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChange}
            />
            <input
              className="reg"
              type="text"
              placeholder="Username"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <button className="getStarted">Sign Up</button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Register;
