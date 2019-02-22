import React from "react";
import { Link } from "react-router-dom";

const LogButton = () => {
  return (
    <>
      <div className="signup">
        <Link to="/" className="signUpButton">
          <button className="logButton">Log In</button>
        </Link>
      </div>
    </>
  );
};

export default LogButton;
