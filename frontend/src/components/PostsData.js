import React, { Component } from "react";
const axios = require("axios");

class PostsData extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get("/posts/allinfo").then(post => {
      console.log(post);
      this.setState({
        posts: post.data.data
      });
    });
  };

  render() {
    let post = this.state.posts.map(res => {
      return (
        <>
          {res.image === null ? (
            ""
          ) : (
            <div className="midDash" key={res.id}>
              <div className="userPic">
                <img className="userImg" src={res.profilepic} alt="" />
                <div className="name">
                  <h4>{res.name}</h4>
                </div>
              </div>
              <div className="userPost">
                <div className="postPic">
                  <img className="postImg" src={res.image} alt="" />
                </div>
                <div className="body">
                  <p>{res.body}</p>
                </div>
              </div>
              <div className="bottomPost">
                <div className="tags">
                  <h5 className="hash">{res.title}</h5>
                </div>
                <div className="likes">
                  <h5 className="like">♥{res.like_count}</h5>
                </div>
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      );
    });
    return (
      <>
        <div>{post}</div>
      </>
    );
  }
}

export default PostsData;
