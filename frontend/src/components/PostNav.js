import React from "react";
import { Link } from "react-router-dom";

const PostNav = () => {
  return (
    <div className="newPost">
      <Link to="/newpost">
        <button className="postButton">Post</button>
      </Link>
    </div>
  );
};

export default PostNav;
