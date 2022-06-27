import React, { Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import SidebarAdmin from "./Admin/SidebarAdmin/SidebarAdmin.js";

import Jurusan from "./User/components/Jurusan/Jurusan"
import Kelas from "./User/components/Kelas/Kelas"
import Wisuda from "./User/components/Wisuda/Wisuda";
import Guru from "./User/components/Guru/Guru";
import { Login } from "./Admin/SidebarAdmin/Login";

export default class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              {/* <Route path="/Admin" exact component={Admin} /> */}
              <Route path="/login" component={Login} />
              <Route path="/admin" component={SidebarAdmin} />
              <Route path="/jurusan/:jurusanId" component={Jurusan} />
              <Route path="/kelas/:kelasId" component={Kelas} />
              <Route path="/wisuda" component={Wisuda} />
              <Route path="/guru" component={Guru} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
