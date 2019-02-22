import React, { Component } from "react";
import axios from "axios";
// import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Auth from "../util/Auth";
// import Form from "./Form";
import LogIn from "../../components/LogIn";
import Register from "../../components/Register";

class AuthForm extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    await axios.post("/users/new", { name, email, password });

    Auth.authenticateUser(name);

    await axios.post("/users/login", { name, password });

    await this.props.checkAuthenticateStatus();

    this.setState({
      name: "",
      email: "",
      password: ""
    });
    // axios.post("/users/new", { username, password }).then(() => {
    //   Auth.authenticateUser(username);
    //   axios
    //     .post("/users/login", { username, password })
    //     .then(() => {
    //       this.props.checkAuthenticateStatus();
    //     })
    //     .then(() => {
    //       this.setState({
    //         username: "",
    //         password: ""
    //       });
    //     });
    // });
  };

  loginUser = e => {
    e.preventDefault();
    const { name, password } = this.state;

    axios
      .post("/users/login", { name, password })
      .then(() => {
        Auth.authenticateUser(name);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          password: ""
        });
      });
  };

  render() {
    const { name, email, password } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route
          path="/auth/login"
          render={() => {
            return (
              <LogIn
                name={name}
                email={email}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
        <Route
          path="/auth/register"
          render={() => {
            return (
              <Register
                name={name}
                email={email}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default AuthForm;
