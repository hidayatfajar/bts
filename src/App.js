import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import SidebarAdmin from "./Admin/SidebarAdmin/SidebarAdmin.js";
<<<<<<< HEAD
// import Dashboard from "./Admin/Dashboard/Dashboard.jsx";
// import Cart from "./Admin/Dashboard/Cart/Cart.jsx";
=======
import RPL from "./User/RPL/RPL1";

>>>>>>> 69a67734aadd9160087fca959e1e742a46e89dee
export default class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
<<<<<<< HEAD
            <Route path="/admin/"  component={SidebarAdmin} />
=======
            <Route path="/Admin" exact component={Admin} />
            <Route path="/SidebarAdmin"  component={SidebarAdmin} />
            <Route path="/rpl"  component={RPL} />
>>>>>>> 69a67734aadd9160087fca959e1e742a46e89dee
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
