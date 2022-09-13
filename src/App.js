import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "./components/User/LandingPage/LandingPage";
import SidebarAdmin from "./components/Admin/SidebarAdmin";
import ProtectedRoutes from "./ProtectedRoutes";

import Navigation from "./components/Admin/Navigation";
import Dashboard from "./components/Admin/Dashboard";
import KelasList from "./components/Admin/Kelas/KelasList";

import SiswaList from "./components/Admin/Siswa/SiswaList";
import AddSiswa from "./components/Admin/Siswa/AddSiswa";
import EditSiswa from "./components/Admin/Siswa/EditSiswa";
import ViewSiswa from "./components/Admin/Siswa/ViewSiswa";

import GuruList from "./components/Admin/Guru/GuruList";
import AddGuru from "./components/Admin/Guru/AddGuru";
import EditGuru from "./components/Admin/Guru/EditGuru";
import ViewGuru from "./components/Admin/Guru/ViewGuru";

import FotoList from "./components/Admin/Photo/FotoList";
import AddFoto from "./components/Admin/Photo/AddFoto";
import EditFoto from "./components/Admin/Photo/EditFoto";

import JurusanList from "./components/User/LandingPage/Jurusan/Jurusan";
import Jurusan from "./components/User/Jurusan/Jurusan";
import Kelas from "./components/User/Kelas/Kelas";
import Wisuda from "./components/User/Wisuda/Wisuda";
import Guru from "./components/User/Guru/Guru";
import { Login } from "./components/Admin/Login";
import NotFound from "./components/User/LandingPage/NotFound/NotFound";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoutes />}>
              <Route path="/admin" element={<SidebarAdmin />}>
                <Route index element={<Dashboard />} />
                <Route path="jurusan/:jurusan_id" element={<KelasList />} />

                {/* GURU */}
                <Route exact path="guru/" element={<GuruList />} />
                <Route path="guru/tambah" element={<AddGuru />} />
                <Route path="guru/ubah/:guru_id" element={<EditGuru />} />
                <Route path="guru/view/:guru_id" element={<ViewGuru />} />

                {/* SISWA */}
                <Route
                  exact
                  path="siswa/kelas/:kelas_id"
                  element={<SiswaList />}
                />
                <Route path="siswa/tambah" element={<AddSiswa />} />
                <Route path="siswa/ubah/:siswa_id" element={<EditSiswa />} />
                <Route path="siswa/view/:siswa_id" element={<ViewSiswa />} />

                {/* PHOTO */}
                <Route
                  exact
                  path="foto/kelas/:kelas_id"
                  element={<FotoList />}
                />
                <Route path="foto/tambah/" element={<AddFoto />} />
                <Route
                  path="foto/kelas/ubah/:gambar_id"
                  element={<EditFoto />}
                />
              </Route>
            </Route>
            <Route path="/jurusan/menu" element={<JurusanList />} />
            <Route path="/jurusan/:jurusanId" element={<Jurusan />} />
            <Route path="/kelas/:kelasId" element={<Kelas />} />
            <Route path="/wisuda" element={<Wisuda />} />
            <Route path="/guru" element={<Guru />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
