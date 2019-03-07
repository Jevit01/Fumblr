import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import DashBoardPage from "./DashBoard/DashBoardPage";
const axios = require("axios");

class PostForm extends Component {
  state = {
    postImg: "",
    postText: "",
    sumbit: false
  };

  handleImg = event => {
    this.setState({
      postImg: event.target.value
    });
  };

  handleText = event => {
    this.setState({
      postText: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { postImg, postText } = this.state;

    axios.post("/posts", { image: postImg, body: postText });

    this.setState({
      submit: true
    });
  };
  render() {
    if (this.state.submitImgCheck) {
      return <Redirect to="/dashboard" component={DashBoardPage} />;
    }

    const { postImg, postText } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="imgInput"
            type="text"
            name="postImg"
            value={postImg}
            onChange={this.handleImg}
            placeholder="Enter image URL"
          />
          <input
            className="textInput"
            type="text"
            name="postText"
            value={postText}
            onChange={this.handleText}
            placeholder="Caption"
          />
          <button type="submit">Submit</button>
        </form>
        <button className="logButton">
          <Link to="/dashboard">Cancel</Link>
        </button>
      </div>
    );
  }
}

export default PostForm;
