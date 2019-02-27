import React from "react";
import Navbar from "./NavBar.js";
import SearchBar from "../SearchBar.js";

const DashBoardPage = () => {
  return (
    <>
      <div className="mainbar">
        <h2 className="logo">f</h2>
        <div className="topbar">
          <SearchBar />
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
