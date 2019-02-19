import React from "react";
import SearchBar from "./SearchBar.js";
import SignUpButton from "./SignUpButton.js";
import LogIn from "./LogIn.js";
import Footer from "./Footer.js";

const HomePage = () => {
  return (
    <>
      <div className="homeMainBar">
        <h2 className="homeLogo">f</h2>
        <SearchBar />
        <SignUpButton />
      </div>
      <br />
      <LogIn />
      <Footer />
    </>
  );
};

export default HomePage;
