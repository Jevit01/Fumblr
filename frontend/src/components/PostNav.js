import React from "react";
import { Link } from "react-router-dom";

const PostNav = () => {
  return (
    <div>
      <Link to="/newpost">
        <button>Post</button>
      </Link>
    </div>
  );
};

export default PostNav;
