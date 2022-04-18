import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import Admin from "./Admin/PostGambar/PostGambar";
export default class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/Admin" exact component={Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
