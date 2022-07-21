import React, { Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import SidebarAdmin from "./components/Admin/SidebarAdmin";

import Jurusan from "./components/User/Jurusan/Jurusan"
import Kelas from "./components/User/Kelas/Kelas"
import Wisuda from "./components/User/Wisuda/Wisuda";
import Guru from "./components/User/Guru/Guru";
import { Login } from "./components/Admin/Login";

export default class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/auth/login" component={Login} />
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
