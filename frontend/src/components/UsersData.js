import React, { Component } from "react";
const axios = require("axios");

class UsersData extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios.get("/users/").then(user => {
      this.setState({
        users: user.data.data
      });
    });
  };

  render() {
    let users = this.state.users.map(res => {
      return (
        <>
          <br />
        </>
      );
    });
    return <>{users}</>;
  }
}

export default UsersData;
