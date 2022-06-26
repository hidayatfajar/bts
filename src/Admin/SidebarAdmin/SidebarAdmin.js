import React, { useState, useEffect } from "react";
// package
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, Route, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navigation from "./Navigation";
import KelasList from "./KelasList";
import Dashboard from "./Dashboard";
import SiswaList from "./SiswaList";
import AddSiswa from "./AddSiswa";
import EditSiswa from "./EditSiswa";
import GuruList from "./GuruList";
import AddGuru from './AddGuru';
import FotoList from "./FotoList";

const SideBar = () => {

  const [content, setContent] = useState([]);
  const [guru, setGuru] = useState([]);

  const getContent = async () => {
    const res = await axios.get(`/jurusan`);
    try {
      setContent(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

 

  return (
    <div>
        <Navigation />

        <div className="hidden tablet:hidden laptop:block h-full w-60 fixed z-10 top-10 left-0 bg-[#25262D] overflow-auto overflow-x-hidden overflow-y-auto">
            <br />
            <br />
            <Link to={`/admin`} className="menu-sidebar">
              <span >
                <FontAwesomeIcon
                  icon={faChartArea}
                  className="ml-1"
                />{" "}
                Dashboard
              </span>
            </Link>
            <Link to={`/admin/guru`} className="menu-sidebar">
              <span  >
                <FontAwesomeIcon
                  icon={faChartArea}
                  className="ml-1"
                />{" "}
                Guru
              </span>
            </Link>
            {content.map((jurusan, index) => {
              return (
                <div key={index}>
                  <Link to={`/admin/jurusan/${jurusan.jurusan_id}`} className="menu-sidebar">
                    <span >
                      <FontAwesomeIcon
                        icon={faChartArea}
                        className="ml-1"
                      />{" "}
                      {jurusan.jurusan_nama}
                    </span>
                  </Link>
                </div>
              );
            })}

        </div>

        {/* Route in class main */}
        <div className="mt-24 ml-1 tablet:ml-1 laptop:ml-64 mr-2 tablet:mr-2 md:mr-3">
          <Route exact path="/admin/">
            <Dashboard />
          </Route>
          <Route path="/admin/jurusan/:jurusan_id">
            <KelasList />
          </Route>

          {/* GURU */}
          <Route exact path="/admin/guru/">
            <GuruList />
          </Route>
          <Route path="/admin/guru/tambah">
            <AddGuru />
          </Route>

          {/* SISWA */}
          <Route path="/admin/siswa/kelas/:kelas_id">
            <SiswaList />
          </Route>
          <Route path="/admin/siswa/tambah">
            <AddSiswa />
          </Route>
          <Route path="/admin/siswa/ubah/:siswa_id">
            <EditSiswa />
          </Route>
          
          {/* PHOTO */}
          <Route path="/admin/foto/kelas/:kelas_id">
            <FotoList />
          </Route>
        </div>
      </div>
  );
};

export default SideBar;
