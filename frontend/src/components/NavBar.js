import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";
const NavBar = () => {
  return (
    <div className="NAV">
      <Link to="/dashboard">
        <img
          className="navImg"
          src="http://www.stickpng.com/assets/thumbs/588a667fd06f6719692a2d19.png"
          alt=""
        />
      </Link>
      <Link to="/explore">
        <img
          className="navImg"
          src="https://www.freeiconspng.com/uploads/compass-rose-png-11.png"
          alt=""
        />
      </Link>
      <Link to="/account">
        <img
          className="navImg"
          src="https://sitejerk.com/images/account.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default NavBar;
