import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <>
      <div className="register">
        <div className="fumblr">
          <h1>Fumblr</h1>
        </div>
        <p>"We don't tumble, We Fumble"</p>
        <br />
        <Link to="/auth/register">
          <button className="getStarted">Get Started</button>
        </Link>
        <br />
        <Link to="/auth/login" className="logIn">
          <button className="logIn">Log In</button>
        </Link>
      </div>
    </>
  );
};

export default GetStarted;
