import React from "react";
import SearchBar from "../SearchBar.js";
import Footer from "../Footer.js";
import LogButton from "./LogButton.js";
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
      <div className="homeMainBar">
        <h2 className="homeLogo">f</h2>
        <SearchBar />
        <LogButton />
      </div>
      <br />
      <div className="register">
        <div className="fumblr">
          <h1>Fumblr</h1>
        </div>
        <p>"We don't tumble, We Fumble"</p>
        <br />
        <form onSubmit={registerUser}>
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
              type="password"
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
          <button type="submit" className="getStarted">
            Sign Up
          </button>
          <br />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
