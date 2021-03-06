import React from "react";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <>
      <div className="signup">
        <Link to="/" className="signUpButton">
          <button className="signUpButton">Sign Up</button>
        </Link>
      </div>
    </>
  );
};

export default SignUpButton;
