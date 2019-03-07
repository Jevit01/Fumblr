import React, { Component } from "react";
import axios from "axios";

class NewPostData extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    this.getPost();
  }

  getNewPost = () => {
    axios.get("/posts/").then(res => {
      this.setState({
        post: res.data.data
      });
    });
  };

  render() {
    return;
  }
}

export default NewPostData;
