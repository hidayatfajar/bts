import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import Admin from "./Admin/PostGambar/PostGambar";
import SidebarAdmin from "./Admin/SidebarAdmin/SidebarAdmin.js";
import RPL from "./User/RPL/RPL1";

export default class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/Admin" exact component={Admin} />
            <Route path="/SidebarAdmin"  component={SidebarAdmin} />
            <Route path="/rpl"  component={RPL} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
