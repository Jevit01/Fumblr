import React from "react";
import SearchBar from "./SearchBar.js";
import Register from "./Register.js";
import Footer from "./Footer.js";
import LogButton from "./LogButton.js";

const RegisterPage = () => {
  return (
    <>
      <div className="homeMainBar">
        <h2 className="homeLogo">f</h2>
        <SearchBar />
        <LogButton />
      </div>
      <br />
      <Register />
      <Footer />
    </>
  );
};

export default RegisterPage;
