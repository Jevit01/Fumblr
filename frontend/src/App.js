import React, { Component } from "react";
import "./App.css";
import DashBoardPage from "./components/DashBoardPage.js";
import HomePage from "./components/HomePage.js";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashBoardPage} />
        </Switch>
      </>
    );
  }
}

export default App;
