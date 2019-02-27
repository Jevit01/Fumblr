import React from "react";
import SearchBar from "./SearchBar.js";
import SignUpButton from "./SignUpButton.js";
import Footer from "./Footer.js";

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
      <div className="homeMainBar">
        <h2 className="homeLogo">f</h2>
        <SearchBar />
        <SignUpButton />
      </div>
      <br />
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
      <Footer />
    </>
  );
};

export default LogIn;
