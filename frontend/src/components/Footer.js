import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="foot">
        <Link to="/terms">Terms</Link>
        <Link to="/Privacy">Privacy</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/support">Support</Link>
      </div>
    </>
  );
};

export default Footer;
