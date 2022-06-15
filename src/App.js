import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import SidebarAdmin from "./Admin/SidebarAdmin/SidebarAdmin.js";
import RPL from "./User/RPL/RPLHooks";

export default class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            {/* <Route path="/Admin" exact component={Admin} /> */}
            <Route path="/admin"  component={SidebarAdmin} />
            <Route path="/rpl/1"  component={RPL} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
