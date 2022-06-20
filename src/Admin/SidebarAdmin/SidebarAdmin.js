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
import "./SidebarAdmin.css";
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
  const [sidebar, setSidebar] = useState("sidebar");
  const [main, setMain] = useState("main");
  const [text, setText] = useState("block");
  const [button, setbutton] = useState("button");
  const [btnleft, setBtnleft] = useState("block");
  const [btnright, setBtnright] = useState("none");
  const [mode, setMode] = useState(1);
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

  const changeSidebar = () => {
    if (mode === 0) {
      setSidebar("sidebar1");
      setMain("main1");
      setbutton("button1");
      setText("none");
      setBtnleft("none");
      setBtnright("block");
      setMode(1);
    } else {
      setSidebar("sidebar");
      setMain("main");
      setbutton("button");
      setText("block");
      setBtnleft("block");
      setBtnright("none");
      setMode(0);
    }
  };

  return (
    <div>
      <div className="admin">
        <Navigation />

        <div className={sidebar}>
          <div className="admin">
            <br />
            <br />
            <Link to={`/admin`}>
              <span className="icon" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={faChartArea}
                  style={{ marginLeft: "3px" }}
                />{" "}
                Dashboard
              </span>
            </Link>
            <Link to={`/admin/guru`}>
              <span className="icon" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={faChartArea}
                  style={{ marginLeft: "3px" }}
                />{" "}
                Guru
              </span>
            </Link>
            {content.map((jurusan, index) => {
              return (
                <div key={index}>
                  <Link to={`/admin/jurusan/${jurusan.jurusan_id}`}>
                    <span className="icon">
                      <FontAwesomeIcon
                        icon={faChartArea}
                        style={{ marginLeft: "3px" }}
                      />{" "}
                      {jurusan.jurusan_nama}
                    </span>
                  </Link>
                </div>
              );
            })}

            <div className={button}>
              <FontAwesomeIcon
                style={{ display: btnleft }}
                icon={faChevronLeft}
                onClick={changeSidebar}
              />
              <FontAwesomeIcon
                style={{ display: btnright }}
                icon={faChevronRight}
                onClick={changeSidebar}
              />
            </div>
          </div>
        </div>

        {/* Route in class main */}
        <div className={main}>
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
    </div>
  );
};

export default SideBar;
