import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/Home/HomePage.js";
import DashBoardPage from "./components/DashBoard/DashBoardPage.js";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import AuthForm from "./FrontAuth/login/AuthForm";
import Auth from "./FrontAuth/util/Auth";
import PrivateRoute from "./FrontAuth/util/AuthRouting";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: ""
  };

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
      if (user.data.name === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          name: Auth.getToken()
        });
      } else {
        if (user.data.name) {
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
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/dashboard" component={DashBoardPage} />
          <Route
            path="/auth"
            render={() => {
              if (this.state.isLoggedIn) {
                return <Redirect to="/dashboard" />;
              }
              return (
                <AuthForm
                  checkAuthenticateStatus={this.checkAuthenticateStatus}
                  isLoggedIn={this.state.isLoggedIn}
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
