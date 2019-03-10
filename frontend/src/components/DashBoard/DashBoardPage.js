import React from "react";
import Navbar from "./NavBar.js";
import SearchBar from "../SearchBar.js";
import PostsData from "../PostsData.js";
import PostNav from "../PostNav.js";

const DashBoardPage = props => {
  return (
    <>
      <div className="mainbar">
        <div className="f">
          <h2 className="logo">f</h2>
        </div>
        <div className="topbar">
          <SearchBar />
          <Navbar />
          <button className="logout" onClick={props.logoutUser}>
            LogOut
          </button>
        </div>
      </div>
      <PostNav />
      <PostsData />
    </>
  );
};

export default DashBoardPage;
