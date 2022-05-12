import React, { useState } from "react";
// package
import {
  Container,
  Navbar,
  Nav
} from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faChevronLeft,
  faChevronRight,
  faChartArea,
  faBook,
  faCalendar,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

import "./SidebarAdmin.css";
import PostGambar from "../PostGambar/PostGambar";
import Guru from "../Guru/Guru";
import Rpl from "../Rpl/Rpl";
import Ak from "../Ak/Ak";
import Tkj from "../Tkj/Tkj";
import Tei from "../Tei/Tei";
import Tbsm from "../Tbsm/Tbsm";
import Tet from "../Tet/Tet";

// IMPORT FOTO KELAS AK
import KelasAk1 from "../Ak/Ak1/KelasAk1/KelasAk1";
import KelasAk2 from "../Ak/Ak2/KelasAk2/KelasAk2";
import KelasAk3 from "../Ak/Ak3/KelasAk3/KelasAk3";

// IMPORT FOTO SISWA AK
import SiswaAk1 from "../Ak/Ak1/SiswaAk1/SiswaAk1";
import SiswaAk2 from "../Ak/Ak2/SiswaAk2/SiswaAk2";
import SiswaAk3 from "../Ak/Ak3/SiswaAk3/SiswaAk3";

// IMPORT FOTO KELAS  RPL
import KelasRpl1 from "../Rpl/Rpl1/KelasRpl1/KelasRpl1";
import KelasRpl2 from "../Rpl/Rpl2/KelasRpl2/KelasRpl2";
import KelasRpl3 from "../Rpl/Rpl3/KelasRpl3/KelasRpl3";

// IMPORT FOTO SISWA RPL
import SiswaRpl1 from "../Rpl/Rpl1/SiswaRpl1/SiswaRpl1";
import SiswaRpl2 from "../Rpl/Rpl2/SiswaRpl2/SiswaRpl2";
import SiswaRpl3 from "../Rpl/Rpl3/SiswaRpl3/SiswaRpl3";

// IMPORT FOTO KELAS TKJ
import KelasTkj1 from "../Tkj/Tkj1/KelasTkj1/KelasTkj1";
import KelasTkj2 from "../Tkj/Tkj2/KelasTkj2/KelasTkj2";
import KelasTkj3 from "../Tkj/Tkj3/KelasTkj3/KelasTkj3";

// IMPORT FOTO SISWA TKJ
import SiswaTkj1 from "../Tkj/Tkj1/SiswaTkj1/SiswaTkj1";
import SiswaTkj2 from "../Tkj/Tkj2/SiswaTkj2/SiswaTkj2";
import SiswaTkj3 from "../Tkj/Tkj3/SiswaTkj3/SiswaTkj3";

// IMPORT FOTO KELAS TEI
import KelasTei1 from "../Tei/Tei1/KelasTei1/KelasTei1";
import KelasTei2 from "../Tei/Tei2/KelasTei2/KelasTei2";
import KelasTei3 from "../Tei/Tei3/KelasTei3/KelasTei3";
import KelasTei4 from "../Tei/Tei4/KelasTei4/KelasTei4";

// IMPORT FOTO SISWA TEI
import SiswaTei1 from "../Tei/Tei1/SiswaTei1/SiswaTei1";
import SiswaTei2 from "../Tei/Tei2/SiswaTei2/SiswaTei2";
import SiswaTei3 from "../Tei/Tei3/SiswaTei3/SiswaTei3";
import SiswaTei4 from "../Tei/Tei4/SiswaTei4/SiswaTei4";

// IMPORT FOTO KELAS TBSM
import KelasTbsm1 from "../Tbsm/Tbsm1/KelasTbsm1/KelasTbsm1";
import KelasTbsm2 from "../Tbsm/Tbsm2/KelasTbsm2/KelasTbsm2";
import KelasTbsm3 from "../Tbsm/Tbsm3/KelasTbsm3/KelasTbsm3";
import KelasTbsm4 from "../Tbsm/Tbsm4/KelasTbsm4/KelasTbsm4";

// IMPORT FOTO SISWA TBSM
import SiswaTbsm1 from "../Tbsm/Tbsm1/SiswaTbsm1/SiswaTbsm1";
import SiswaTbsm2 from "../Tbsm/Tbsm2/SiswaTbsm2/SiswaTbsm2";
import SiswaTbsm3 from "../Tbsm/Tbsm3/SiswaTbsm3/SiswaTbsm3";
import SiswaTbsm4 from "../Tbsm/Tbsm4/SiswaTbsm4/SiswaTbsm4";

// IMPORT FOTO KELAS TET
import KelasTet1 from "../Tet/Tet1/KelasTet1/KelasTet1";
import KelasTet2 from "../Tet/Tet2/KelasTet2/KelasTet2";

// IMPORT FOTO SISWA TET
import SiswaTet1 from "../Tet/Tet1/SiswaTet1/SiswaTet1";
import SiswaTet2 from "../Tet/Tet2/SiswaTet2/SiswaTet2";

// IMPORT EDIT GURU
import EditGuru from "../Guru/EditGuru/EditGuru";

// IMPORT EDIT KELAS AK
import editkelasak1 from "../Ak/Ak1/EditKelasAk1/EditKelasAk1";
import editkelasak2 from "../Ak/Ak2/EditKelasAk2/EditKelasAk2";
import editkelasak3 from "../Ak/Ak3/EditKelasAk3/EditKelasAk3";

// IMPORT EDIT SISWA AK
import editsiswaak1 from "../Ak/Ak1/EditSiswaAk1/EditSiswaAk1";
import editsiswaak2 from "../Ak/Ak2/EditSiswaAk2/EditSiswaAk2";
import editsiswaak3 from "../Ak/Ak3/EditSiswaAk3/EditSiswaAk3";

// IMPORT EDIT KELAS RPL
import editkelasrpl1 from "../Rpl/Rpl1/EditKelasRpl1/EditKelasRpl1";
import editkelasrpl2 from "../Rpl/Rpl2/EditKelasRpl2/EditKelasRpl2";
import editkelasrpl3 from "../Rpl/Rpl3/EditKelasRpl3/EditKelasRpl3";

// IMPORT EDIT SISWA RPL
import editsiswarpl1 from "../Rpl/Rpl1/EditSiswaRpl1/EditSiswaRpl1";
import editsiswarpl2 from "../Rpl/Rpl2/EditSiswaRpl2/EditSiswaRpl2";
import editsiswarpl3 from "../Rpl/Rpl3/EditSiswaRpl3/EditSiswaRpl3";

// IMPORT EDIT KELAS TKJ
import editkelastkj1 from "../Tkj/Tkj1/EditKelasTkj1/EditKelasTkj1";
import editkelastkj2 from "../Tkj/Tkj2/EditKelasTkj2/EditKelasTkj2";
import editkelastkj3 from "../Tkj/Tkj3/EditKelasTkj3/EditKelasTkj3";

// IMPORT EDIT SISWA TKJ
import editsiswatkj1 from "../Tkj/Tkj1/EditSiswaTkj1/EditSiswaTkj1";
import editsiswatkj2 from "../Tkj/Tkj2/EditSiswaTkj2/EditSiswaTkj2";
import editsiswatkj3 from "../Tkj/Tkj3/EditSiswaTkj3/EditSiswaTkj3";

// IMPORT EDIT KELAS TEI
import editkelastei1 from "../Tei/Tei1/EditKelasTei1/EditKelasTei1";
import editkelastei2 from "../Tei/Tei2/EditKelasTei2/EditKelasTei2";
import editkelastei3 from "../Tei/Tei3/EditKelasTei3/EditKelasTei3";
import editkelastei4 from "../Tei/Tei4/EditKelasTei4/EditKelasTei4";

// IMPORT EDIT SISWA TEI
import editsiswatei1 from "../Tei/Tei1/EditSiswaTei1/EditSiswaTei1";
import editsiswatei2 from "../Tei/Tei2/EditSiswaTei2/EditSiswaTei2";
import editsiswatei3 from "../Tei/Tei3/EditSiswaTei3/EditSiswaTei3";
import editsiswatei4 from "../Tei/Tei4/EditSiswaTei4/EditSiswaTei4";

// IMPORT EDIT KELAS TBSM
import editkelastbsm1 from "../Tbsm/Tbsm1/EditKelasTbsm1/EditKelasTbsm1";
import editkelastbsm2 from "../Tbsm/Tbsm2/EditKelasTbsm2/EditKelasTbsm2";
import editkelastbsm3 from "../Tbsm/Tbsm3/EditKelasTbsm3/EditKelasTbsm3";
import editkelastbsm4 from "../Tbsm/Tbsm4/EditKelasTbsm4/EditKelasTbsm4";

// IMPORT EDIT SISWA TBSM
import editsiswatbsm1 from "../Tbsm/Tbsm1/EditSiswaTbsm1/EditSiswaTbsm1";
import editsiswatbsm2 from "../Tbsm/Tbsm2/EditSiswaTbsm2/EditSiswaTbsm2";
import editsiswatbsm3 from "../Tbsm/Tbsm3/EditSiswaTbsm3/EditSiswaTbsm3";
import editsiswatbsm4 from "../Tbsm/Tbsm4/EditSiswaTbsm4/EditSiswaTbsm4";

// IMPORT EDIT KELAS TET
import editkelastet1 from "../Tet/Tet1/EditKelasTet1/EditKelasTet1";
import editkelastet2 from "../Tet/Tet2/EditKelasTet2/EditKelasTet2";

// IMPORT EDIT SISWA TET
import editsiswatet1 from "../Tet/Tet1/EditSiswaTet1/EditSiswaTet1";
import editsiswatet2 from "../Tet/Tet2/EditSiswaTet2/EditSiswaTet2";

// IMPORT POST GAMBAR GURU
import postguru from "../Guru/PostGambarGuru/PostGambarGuru";

// IMPORT POST FOTO KELAS AK
import postkelasak1 from "../Ak/Ak1/KelasAk1/PostKelasAk1/PostKelasAk1";
import postkelasak2 from "../Ak/Ak2/KelasAk2/PostKelasAk2/PostKelasAk2";
import postkelasak3 from "../Ak/Ak3/KelasAk3/PostKelasAk3/PostKelasAk3";

// IMPORT POST FOTO SISWA AK
import postsiswaak1 from "../Ak/Ak1/SiswaAk1/PostSiswaAk1/PostSiswaAk1";
import postsiswaak2 from "../Ak/Ak2/SiswaAk2/PostSiswaAk2/PostSiswaAk2";
import postsiswaak3 from "../Ak/Ak3/SiswaAk3/PostSiswaAk3/PostSiswaAk3";

// IMPORT POST FOTO KELAS RPL
import postkelasrpl1 from "../Rpl/Rpl1/KelasRpl1/PostKelasRpl1/PostKelasRpl1";
import postkelasrpl2 from "../Rpl/Rpl2/KelasRpl2/PostKelasRpl2/PostKelasRpl2";
import postkelasrpl3 from "../Rpl/Rpl3/KelasRpl3/PostKelasRpl3/PostKelasRpl3";

// IMPORT POST FOTO SISWA RPL
import postsiswarpl1 from "../Rpl/Rpl1/SiswaRpl1/PostSiswaRpl1/PostSiswaRpl1";
import postsiswarpl2 from "../Rpl/Rpl2/SiswaRpl2/PostSiswaRpl2/PostSiswaRpl2";
import postsiswarpl3 from "../Rpl/Rpl3/SiswaRpl3/PostSiswaRpl3/PostSiswaRpl3";

// IMPORT POST FOTO KELAS TKJ
import postkelastkj1 from "../Tkj/Tkj1/KelasTkj1/PostKelasTkj1/PostKelasTkj1";
import postkelastkj2 from "../Tkj/Tkj2/KelasTkj2/PostKelasTkj2/PostKelasTkj2";
import postkelastkj3 from "../Tkj/Tkj3/KelasTkj3/PostKelasTkj3/PostKelasTkj3";

// IMPORT POST FOTO SISWA RPL
import postsiswatkj1 from "../Tkj/Tkj1/SiswaTkj1/PostSiswaTkj1/PostSiswaTkj1";
import postsiswatkj2 from "../Tkj/Tkj2/SiswaTkj2/PostSiswaTkj2/PostSiswaTkj2";
import postsiswatkj3 from "../Tkj/Tkj3/SiswaTkj3/PostSiswaTkj3/PostSiswaTkj3";

// IMPORT POST FOTO KELAS TEI
import postkelastei1 from "../Tei/Tei1/KelasTei1/PostKelasTei1/PostKelasTei1";
import postkelastei2 from "../Tei/Tei2/KelasTei2/PostKelasTei2/PostKelasTei2";
import postkelastei3 from "../Tei/Tei3/KelasTei3/PostKelasTei3/PostKelasTei3";
import postkelastei4 from "../Tei/Tei4/KelasTei4/PostKelasTei4/PostKelasTei4";

// IMPORT POST FOTO SISWA TEI
import postsiswatei1 from "../Tei/Tei1/SiswaTei1/PostSiswaTei1/PostSiswaTei1";
import postsiswatei2 from "../Tei/Tei2/SiswaTei2/PostSiswaTei2/PostSiswaTei2";
import postsiswatei3 from "../Tei/Tei3/SiswaTei3/PostSiswaTei3/PostSiswaTei3";
import postsiswatei4 from "../Tei/Tei4/SiswaTei4/PostSiswaTei4/PostSiswaTei4";

// IMPORT POST FOTO KELAS TBSM
import postkelastbsm1 from "../Tbsm/Tbsm1/KelasTbsm1/PostKelasTbsm1/PostKelasTbsm1";
import postkelastbsm2 from "../Tbsm/Tbsm2/KelasTbsm2/PostKelasTbsm2/PostKelasTbsm2";
import postkelastbsm3 from "../Tbsm/Tbsm3/KelasTbsm3/PostKelasTbsm3/PostKelasTbsm3";
import postkelastbsm4 from "../Tbsm/Tbsm4/KelasTbsm4/PostKelasTbsm4/PostKelasTbsm4";

// IMPORT POST FOTO SISWA TBSM
import postsiswatbsm1 from "../Tbsm/Tbsm1/SiswaTbsm1/PostSiswaTbsm1/PostSiswaTbsm1";
import postsiswatbsm2 from "../Tbsm/Tbsm2/SiswaTbsm2/PostSiswaTbsm2/PostSiswaTbsm2";
import postsiswatbsm3 from "../Tbsm/Tbsm3/SiswaTbsm3/PostSiswaTbsm3/PostSiswaTbsm3";
import postsiswatbsm4 from "../Tbsm/Tbsm4/SiswaTbsm4/PostSiswaTbsm4/PostSiswaTbsm4";

// IMPORT POST FOTO KELAS TBSM
import postkelastet1 from "../Tet/Tet1/KelasTet1/PostKelasTet1/PostKelasTet1";
import postkelastet2 from "../Tet/Tet2/KelasTet2/PostKelasTet2/PostKelasTet2";

// IMPORT POST FOTO SISWA TBSM
import postsiswatet1 from "../Tet/Tet1/SiswaTet1/PostSiswaTet1/PostSiswaTet1";
import postsiswatet2 from "../Tet/Tet2/SiswaTet2/PostSiswaTet2/PostSiswaTet2";





import search from "../Assets/icons-search.svg";
import notif from "../Assets/icons-notifikasi.svg";
import Cart from "../Dashboard/Cart/Cart";

const SideBar = () => {

  const [sidebar, setSidebar] = useState("sidebar");
  const [main, setMain] = useState("main");
  const [text, setText] = useState("block");
  const [button, setbutton] = useState("button");
  const [btnleft, setBtnleft] = useState("block");
  const [btnright, setBtnright] = useState("none");

  const [mode, setMode] = useState(1);

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
        {/* NAVBAR */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="#home">MEMO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="#link" className="nav1"><img src={search} alt="" /></Nav.Link>
                <Nav.Link href="#link" className="nav2"><img src={notif} alt="" /></Nav.Link>
                <Nav.Link href="#link" style={{color:'#FFF'}} className="nav3">Nama Admin</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 

        <div className={sidebar}>
          <div className="admin">
            <br />
            <br />
            {/* Admin Yang Sudah Login */}
            

            {/* Menu Sidebar */}
            <Link to="/admin">
              <span className="icon">
                <FontAwesomeIcon
                  icon={faChartArea}
                  style={{ marginLeft: "3px" }}
                />
              </span>
              <span style={{ display: text}}>
                {" "}
                Dashboard 
              </span>
            </Link>


            {/* -------- */}
            <Link to="/admin/guru">
              <span className="icon">
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginLeft: "3px" }}
                />
              </span>{" "}
              <span style={{ display: text }}>
                Guru
              </span>
            </Link>

            {/* --------- */}
            <Link to="/admin/ak">
              <span className="icon">
                <FontAwesomeIcon icon={faClipboardList} style={{ marginLeft: "2px" }} />
              </span>{" "}
              <span style={{ display: text, paddingLeft: "4px" }}>AK</span>
            </Link>

            <Link to="/admin/rpl">
              <span className="icon">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  style={{ marginLeft: "1px" }}
                />
              </span>{" "}
              <span style={{ display: text}}>
                RPL
              </span>
            </Link>

            {/* ----------- */}
            <Link to="/admin/tkj">
              <span className="icon">
                <FontAwesomeIcon icon={faBook} style={{ marginLeft: "1px" }} />
              </span>{" "}
              <span style={{ display: text, marginLeft: "3px" }}>
                TKJ
              </span>
            </Link>

            <Link to="/admin/tei">
              <span className="icon">
                <FontAwesomeIcon icon={faBook} style={{ marginLeft: "1px" }} />
              </span>{" "}
              <span style={{ display: text, marginLeft: "3px" }}>
                TEI
              </span>
            </Link>

            <Link to="/admin/tbsm">
              <span className="icon">
                <FontAwesomeIcon icon={faBook} style={{ marginLeft: "1px" }} />
              </span>{" "}
              <span style={{ display: text, marginLeft: "3px" }}>
                TBSM
              </span>
            </Link>

            <Link to="/admin/tet">
              <span className="icon">
                <FontAwesomeIcon icon={faBook} style={{ marginLeft: "1px" }} />
              </span>{" "}
              <span style={{ display: text, marginLeft: "3px" }}>
                TET
              </span>
            </Link>

            

            {/* Button for hide and show sidebar */}
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
          <Route exact path="/admin"  component={Cart} />
          <Route exact path="/admin/guru"  component={Guru} />
          <Route exact path="/admin/postgambar"  component={PostGambar} />
          <Route exact path="/admin/rpl"  component={Rpl} />
          <Route exact path="/admin/ak"  component={Ak} />
          <Route exact path="/admin/tkj"  component={Tkj} />
          <Route exact path="/admin/tei"  component={Tei} />
          <Route exact path="/admin/tbsm"  component={Tbsm} />
          <Route exact path="/admin/tet"  component={Tet} />

          {/* ROUTE FOTO KELAS AK*/}
          <Route exact path="/admin/ak/foto-kelas-ak1"  component={KelasAk1} />
          <Route exact path="/admin/ak/foto-kelas-ak2"  component={KelasAk2} />
          <Route exact path="/admin/ak/foto-kelas-ak3"  component={KelasAk3} />

          {/* ROUTE FOTO SISWA AK */}
          <Route exact path="/admin/ak/foto-siswa-ak1"  component={SiswaAk1} />
          <Route exact path="/admin/ak/foto-siswa-ak2"  component={SiswaAk2} />
          <Route exact path="/admin/ak/foto-siswa-ak3"  component={SiswaAk3} />

          {/* ROUTE FOTO KELAS RPL*/}
          <Route exact path="/admin/rpl/foto-kelas-rpl1"  component={KelasRpl1} />
          <Route exact path="/admin/rpl/foto-kelas-rpl2"  component={KelasRpl2} />
          <Route exact path="/admin/rpl/foto-kelas-rpl3"  component={KelasRpl3} />

          {/* ROUTE FOTO SISWA RPL */}
          <Route exact path="/admin/rpl/foto-siswa-rpl1"  component={SiswaRpl1} />
          <Route exact path="/admin/rpl/foto-siswa-rpl2"  component={SiswaRpl2} />
          <Route exact path="/admin/rpl/foto-siswa-rpl3"  component={SiswaRpl3} />

          {/* ROUTE FOTO KELAS TKJ */}
          <Route exact path="/admin/tkj/foto-kelas-tkj1"  component={KelasTkj1} />
          <Route exact path="/admin/tkj/foto-kelas-tkj2"  component={KelasTkj2} />
          <Route exact path="/admin/tkj/foto-kelas-tkj3"  component={KelasTkj3} />

          {/* ROUTE FOTO SISWA TKJ */}
          <Route exact path="/admin/tkj/foto-siswa-tkj1"  component={SiswaTkj1} />
          <Route exact path="/admin/tkj/foto-siswa-tkj2"  component={SiswaTkj2} />
          <Route exact path="/admin/tkj/foto-siswa-tkj3"  component={SiswaTkj3} />

          {/* ROUTE FOTO KELAS TEI */}
          <Route exact path="/admin/tei/foto-kelas-tei1"  component={KelasTei1} />
          <Route exact path="/admin/tei/foto-kelas-tei2"  component={KelasTei2} />
          <Route exact path="/admin/tei/foto-kelas-tei3"  component={KelasTei3} />
          <Route exact path="/admin/tei/foto-kelas-tei4"  component={KelasTei4} />

          {/* ROUTE FOTO SISWA TEI */}
          <Route exact path="/admin/tei/foto-siswa-tei1"  component={SiswaTei1} />
          <Route exact path="/admin/tei/foto-siswa-tei2"  component={SiswaTei2} />
          <Route exact path="/admin/tei/foto-siswa-tei3"  component={SiswaTei3} />
          <Route exact path="/admin/tei/foto-siswa-tei4"  component={SiswaTei4} />

          {/* ROUTE FOTO KELAS TBSM */}
          <Route exact path="/admin/tbsm/foto-kelas-tbsm1"  component={KelasTbsm1} />
          <Route exact path="/admin/tbsm/foto-kelas-tbsm2"  component={KelasTbsm2} />
          <Route exact path="/admin/tbsm/foto-kelas-tbsm3"  component={KelasTbsm3} />
          <Route exact path="/admin/tbsm/foto-kelas-tbsm4"  component={KelasTbsm4} />

          {/* ROUTE FOTO SISWA TBSM */}
          <Route exact path="/admin/tbsm/foto-siswa-tbsm1"  component={SiswaTbsm1} />
          <Route exact path="/admin/tbsm/foto-siswa-tbsm2"  component={SiswaTbsm2} />
          <Route exact path="/admin/tbsm/foto-siswa-tbsm3"  component={SiswaTbsm3} />
          <Route exact path="/admin/tbsm/foto-siswa-tbsm4"  component={SiswaTbsm4} />


          {/* ROUTE FOTO KELAS TET */}
          <Route exact path="/admin/tet/foto-kelas-tet1"  component={KelasTet1} />
          <Route exact path="/admin/tet/foto-kelas-tet2"  component={KelasTet2} />

          {/* ROUTE FOTO SISWA TET */}
          <Route exact path="/admin/tet/foto-siswa-tet1"  component={SiswaTet1} />
          <Route exact path="/admin/tet/foto-siswa-tet2"  component={SiswaTet2} />

          {/* ROUTE EDIT GURU */}
          <Route exact path="/admin/guru/edit-guru"  component={EditGuru} />

          {/* ROUTE EDIT KELAS AK*/}
          <Route exact path="/admin/ak/edit-kelas-ak1"  component={editkelasak1} />
          <Route exact path="/admin/ak/edit-kelas-ak2"  component={editkelasak2} />
          <Route exact path="/admin/ak/edit-kelas-ak3"  component={editkelasak3} />

          {/* ROUTE EDIT SISWA AK */}
          <Route exact path="/admin/ak/edit-siswa-ak1"  component={editsiswaak1} />
          <Route exact path="/admin/ak/edit-siswa-ak2"  component={editsiswaak2} />
          <Route exact path="/admin/ak/edit-siswa-ak3"  component={editsiswaak3} />

          {/* ROUTE EDIT KELAS RPL*/}
          <Route exact path="/admin/rpl/edit-kelas-rpl1"  component={editkelasrpl1} />
          <Route exact path="/admin/rpl/edit-kelas-rpl2"  component={editkelasrpl2} />
          <Route exact path="/admin/rpl/edit-kelas-rpl3"  component={editkelasrpl3} />

          {/* ROUTE EDIT SISWA RPL */}
          <Route exact path="/admin/rpl/edit-siswa-rpl1"  component={editsiswarpl1} />
          <Route exact path="/admin/rpl/edit-siswa-rpl2"  component={editsiswarpl2} />
          <Route exact path="/admin/rpl/edit-siswa-rpl3"  component={editsiswarpl3} />

          {/* ROUTE EDIT KELAS TKJ */}
          <Route exact path="/admin/tkj/edit-kelas-tkj1"  component={editkelastkj1} />
          <Route exact path="/admin/tkj/edit-kelas-tkj2"  component={editkelastkj2} />
          <Route exact path="/admin/tkj/edit-kelas-tkj3"  component={editkelastkj3} />

          {/* ROUTE EDIT SISWA TKJ */}
          <Route exact path="/admin/tkj/edit-siswa-tkj1"  component={editsiswatkj1} />
          <Route exact path="/admin/tkj/edit-siswa-tkj2"  component={editsiswatkj2} />
          <Route exact path="/admin/tkj/edit-siswa-tkj3"  component={editsiswatkj3} />

          {/* ROUTE EDIT KELAS TEI */}
          <Route exact path="/admin/tei/edit-kelas-tei1"  component={editkelastei1} />
          <Route exact path="/admin/tei/edit-kelas-tei2"  component={editkelastei2} />
          <Route exact path="/admin/tei/edit-kelas-tei3"  component={editkelastei3} />
          <Route exact path="/admin/tei/edit-kelas-tei4"  component={editkelastei4} />

          {/* ROUTE EDIT SISWA TEI */}
          <Route exact path="/admin/tei/edit-siswa-tei1"  component={editsiswatei1} />
          <Route exact path="/admin/tei/edit-siswa-tei2"  component={editsiswatei2} />
          <Route exact path="/admin/tei/edit-siswa-tei3"  component={editsiswatei3} />
          <Route exact path="/admin/tei/edit-siswa-tei4"  component={editsiswatei4} />

          {/* ROUTE EDIT KELAS TBSM */}
          <Route exact path="/admin/tbsm/edit-kelas-tbsm1"  component={editkelastbsm1} />
          <Route exact path="/admin/tbsm/edit-kelas-tbsm2"  component={editkelastbsm2} />
          <Route exact path="/admin/tbsm/edit-kelas-tbsm3"  component={editkelastbsm3} />
          <Route exact path="/admin/tbsm/edit-kelas-tbsm4"  component={editkelastbsm4} />

          {/* ROUTE EDIT SISWA TBSM */}
          <Route exact path="/admin/tbsm/edit-siswa-tbsm1"  component={editsiswatbsm1} />
          <Route exact path="/admin/tbsm/edit-siswa-tbsm2"  component={editsiswatbsm2} />
          <Route exact path="/admin/tbsm/edit-siswa-tbsm3"  component={editsiswatbsm3} />
          <Route exact path="/admin/tbsm/edit-siswa-tbsm4"  component={editsiswatbsm4} />


          {/* ROUTE EDIT KELAS TET */}
          <Route exact path="/admin/tet/edit-kelas-tet1"  component={editkelastet1} />
          <Route exact path="/admin/tet/edit-kelas-tet2"  component={editkelastet2} />

          {/* ROUTE EDIT SISWA TET */}
          <Route exact path="/admin/tet/edit-siswa-tet1"  component={editsiswatet1} />
          <Route exact path="/admin/tet/edit-siswa-tet2"  component={editsiswatet2} />

          {/* ROUTE POST FOTO GURU */}
          <Route exact path="/admin/guru/post-foto-guru"  component={postguru} />

          {/* ROUTE POST FOTO KELAS AK */}
          <Route exact path="/admin/ak/foto-kelas-ak1/post-kelas-ak1"  component={postkelasak1} />
          <Route exact path="/admin/ak/foto-kelas-ak2/post-kelas-ak2"  component={postkelasak2} />
          <Route exact path="/admin/ak/foto-kelas-ak3/post-kelas-ak3"  component={postkelasak3} />

          {/* ROUTE POST FOTO SISWA AK */}
          <Route exact path="/admin/ak/foto-siswa-ak1/post-siswa-ak1"  component={postsiswaak1} />
          <Route exact path="/admin/ak/foto-siswa-ak2/post-siswa-ak2"  component={postsiswaak2} />
          <Route exact path="/admin/ak/foto-siswa-ak3/post-siswa-ak3"  component={postsiswaak3} />

          {/* ROUTE POST FOTO KELAS RPL */}
          <Route exact path="/admin/rpl/foto-kelas-rpl1/post-kelas-rpl1"  component={postkelasrpl1} />
          <Route exact path="/admin/rpl/foto-kelas-rpl2/post-kelas-rpl2"  component={postkelasrpl2} />
          <Route exact path="/admin/rpl/foto-kelas-rpl3/post-kelas-rpl3"  component={postkelasrpl3} />

          {/* ROUTE POST FOTO SISWA RPL */}
          <Route exact path="/admin/rpl/foto-siswa-rpl1/post-siswa-rpl1"  component={postsiswarpl1} />
          <Route exact path="/admin/rpl/foto-siswa-rpl2/post-siswa-rpl2"  component={postsiswarpl2} />
          <Route exact path="/admin/rpl/foto-siswa-rpl3/post-siswa-rpl3"  component={postsiswarpl3} />

          {/* ROUTE POST FOTO KELAS TKJ */}
          <Route exact path="/admin/tkj/foto-kelas-tkj1/post-kelas-tkj1"  component={postkelastkj1} />
          <Route exact path="/admin/tkj/foto-kelas-tkj2/post-kelas-tkj2"  component={postkelastkj2} />
          <Route exact path="/admin/tkj/foto-kelas-tkj3/post-kelas-tkj3"  component={postkelastkj3} />

          {/* ROUTE POST FOTO SISWA TKJ */}
          <Route exact path="/admin/tkj/foto-siswa-tkj1/post-siswa-tkj1"  component={postsiswatkj1} />
          <Route exact path="/admin/tkj/foto-siswa-tkj2/post-siswa-tkj2"  component={postsiswatkj2} />
          <Route exact path="/admin/tkj/foto-siswa-tkj3/post-siswa-tkj3"  component={postsiswatkj3} />

          {/* ROUTE POST FOTO KELAS TEI */}
          <Route exact path="/admin/tei/foto-kelas-tei1/post-kelas-tei1"  component={postkelastei1} />
          <Route exact path="/admin/tei/foto-kelas-tei2/post-kelas-tei2"  component={postkelastei2} />
          <Route exact path="/admin/tei/foto-kelas-tei3/post-kelas-tei3"  component={postkelastei3} />
          <Route exact path="/admin/tei/foto-kelas-tei4/post-kelas-tei4"  component={postkelastei4} />

          {/* ROUTE POST FOTO SISWA TEI */}
          <Route exact path="/admin/tei/foto-siswa-tei1/post-siswa-tei1"  component={postsiswatei1} />
          <Route exact path="/admin/tei/foto-siswa-tei2/post-siswa-tei2"  component={postsiswatei2} />
          <Route exact path="/admin/tei/foto-siswa-tei3/post-siswa-tei3"  component={postsiswatei3} />
          <Route exact path="/admin/tei/foto-siswa-tei4/post-siswa-tei4"  component={postsiswatei4} />


          {/* ROUTE POST FOTO KELAS TBSM */}
          <Route exact path="/admin/tbsm/foto-kelas-tbsm1/post-kelas-tbsm1"  component={postkelastbsm1} />
          <Route exact path="/admin/tbsm/foto-kelas-tbsm2/post-kelas-tbsm2"  component={postkelastbsm2} />
          <Route exact path="/admin/tbsm/foto-kelas-tbsm3/post-kelas-tbsm3"  component={postkelastbsm3} />
          <Route exact path="/admin/tbsm/foto-kelas-tbsm4/post-kelas-tbsm4"  component={postkelastbsm4} />

          {/* ROUTE POST FOTO SISWA TBSM*/}
          <Route exact path="/admin/tbsm/foto-siswa-tbsm1/post-siswa-tbsm1"  component={postsiswatbsm1} />
          <Route exact path="/admin/tbsm/foto-siswa-tbsm2/post-siswa-tbsm2"  component={postsiswatbsm2} />
          <Route exact path="/admin/tbsm/foto-siswa-tbsm3/post-siswa-tbsm3"  component={postsiswatbsm3} />
          <Route exact path="/admin/tbsm/foto-siswa-tbsm4/post-siswa-tbsm4"  component={postsiswatbsm4} />

          {/* ROUTE POST FOTO KELAS TET */}
          <Route exact path="/admin/tet/foto-kelas-tet1/post-kelas-tet1"  component={postkelastet1} />
          <Route exact path="/admin/tet/foto-kelas-tet2/post-kelas-tet2"  component={postkelastet2} />

          {/* ROUTE POST FOTO SISWA TET*/}
          <Route exact path="/admin/tet/foto-siswa-tet1/post-siswa-tet1"  component={postsiswatet1} />
          <Route exact path="/admin/tet/foto-siswa-tet2/post-siswa-tet2"  component={postsiswatet2} />








        </div>
      </div>
    </div>
  );
};

export default SideBar;
