import React, { Component } from "react";
import "./App.css";
import DashBoardPage from "./components/DashBoardPage.js";
import HomePage from "./components/HomePage.js";
import GetStartedPage from "./components/GetStartedPage.js";
import RegisterPage from "./components/RegisterPage.js";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Users from "./FrontAuth/Users/Users";
import AuthForm from "./FrontAuth/login/AuthForm";
import Auth from "./FrontAuth/util/Auth";
import PrivateRoute from "./FrontAuth/util/AuthRouting";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: ""
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={GetStartedPage} />
          <Route path="/dashboard" component={DashBoardPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/users" component={Users} />
          <Route
            path="/auth"
            render={() => {
              return (
                <AuthForm
                  checkAuthenticateStatus={this.checkAuthenticateStatus}
                  isLoggedIn={isLoggedIn}
                />
              );
            }}
          />
        </Switch>
      </>
    );
  }
}

export default App;
