import React, { Component } from "react";
const axios = require("axios");

class PostNav extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    this.post();
  }

  post = () => {
    axios.post("/posts/").then(res => {
      this.setState({
        post: res.data.data
      });
    });
  };

  render() {
    let post = this.state.post.map(res => {
      return <></>;
    });
  }
}

export default PostNav;
