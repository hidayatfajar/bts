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
import Rpl from "../Rpl/Rpl";
import Ak from "../Ak/Ak";
import ListAk from "../Ak/ListAk1/ListAk1";
import Tkj from "../Tkj/Tkj";
import Tei from "../Tei/Tei";
import Tbsm from "../Tbsm/Tbsm";
import Tet from "../Tet/Tet";


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
            <Link to="/admin/postgambar">
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
          <Route exact path="/admin/postgambar"  component={PostGambar} />
          <Route exact path="/admin/rpl"  component={Rpl} />
          <Route exact path="/admin/ak"  component={Ak} />
          <Route exact path="/admin/tkj"  component={Tkj} />
          <Route exact path="/admin/tei"  component={Tei} />
          <Route exact path="/admin/tbsm"  component={Tbsm} />
          <Route exact path="/admin/tet"  component={Tet} />
          <Route exact path="/admin/list"  component={ListAk} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
