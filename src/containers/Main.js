import React, { Component } from "react";
import "./Main.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import Home from "../screens/Home/Home";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
