import React from "react";
import SearchBar from "../SearchBar.js";
import GetStarted from "./GetStarted.js";
import Footer from "../Footer.js";

const HomePage = () => {
  return (
    <>
      <div className="homeMainBar">
        <h2 className="homeLogo">f</h2>
        <SearchBar />
      </div>
      <br />
      <GetStarted />
      <Footer />
    </>
  );
};

export default HomePage;
