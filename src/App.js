import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import SidebarAdmin from "./Admin/SidebarAdmin/SidebarAdmin.js";
// import Dashboard from "./Admin/Dashboard/Dashboard.jsx";
// import Cart from "./Admin/Dashboard/Cart/Cart.jsx";
export default class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/admin/"  component={SidebarAdmin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
