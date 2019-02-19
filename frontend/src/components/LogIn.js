import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="login">
        <div className="fumblr">
          <h1>Fumblr</h1>
        </div>
        <input className="email" type="text" placeholder="Email" />
        <br />
        <button className="next">Next</button>
      </div>
    </>
  );
};

export default LogIn;
