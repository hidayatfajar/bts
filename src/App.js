import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import SidebarAdmin from "./Admin/SidebarAdmin/SidebarAdmin.js";

import Jurusan from "./User/RPL/Jurusan"
import Kelas from "./User/RPL/Kelas"

export default class App extends Component {
  render() {
    // const Jurusan = lazy(() => {
    //   return new Promise(resolve => {
    //     setTimeout(() => resolve(import("./User/RPL/Jurusan")), 1000);
    //   });
    // });
    // const Kelas = React.lazy(() => import("./User/RPL/Kelas"));

    return (
      <div>
        <BrowserRouter>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Switch>
              <Route path="/" exact component={LandingPage} />
              {/* <Route path="/Admin" exact component={Admin} /> */}
              <Route path="/admin" component={SidebarAdmin} />
              <Route path="/jurusan/:jurusanId" component={Jurusan} />
              <Route path="/kelas/:kelasId" component={Kelas} />
            </Switch>
          {/* </Suspense> */}
        </BrowserRouter>
      </div>
    );
  }
}
