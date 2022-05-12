import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import "./KelasTbsm4.css";
import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { FaTrash, FaEdit } from "react-icons/fa";

class KelasTbsm4 extends Component {
  state = {
    users: [
      {
        foto: "img",
        action: "08561310250",
      },
      {
        foto: "img",
        action: "08561310250",
      },
      {
        foto: "img",
        action: "08561310250",
      },
      {
        foto: "img",
        action: "08561310250",
      },
      {
        foto: "img",
        action: "08561310250",
      },
    ],
  };
  render() {
    const columns = [
      {
        text: "Foto",
        headerStyle: {
          width: "25px",
        },
        // make delete and update button
        formatter: (cellContent, row) => {
          return (
            <div>
              {/* <Sidebar /> */}
              <img src="https://placeimg.com/140/80/tech" alt="" />
            </div>
          );
        },
      },
      {
        text: "Aksi",
        headerStyle: {
          width: "50px",
        },
        // make delete and update button
        formatter: (cellContent, row) => {
          return (
            <div>
              {/* <Sidebar /> */}
              <Row>
                <Col md={3}>
                  <Link to={`/admin/tbsm/edit-kelas-tbsm4`}>
                    <Button variant="primary" className="mr-2" block>
                      {" "}
                      <FaEdit />
                    </Button>
                  </Link>
                </Col>
                <Col md={3}>
                  <Link to={`/admin/siswa/ubah/${row.siswa_id}`}>
                    <Button variant="danger" className="mr-2" block>
                      {" "}
                      <FaTrash />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          );
        },
      },
    ];
    return (
      <div>
        <div className="container" style={{ boxShadow:'5px 5px 10px #D3D3D3', padding: "60px" }}>
          <div id="row">
            <h3> FOTO KELAS TEKNIK SEPEDA MOTOR 4 </h3>
            
            <div id="end">
              <Link to="/admin/tbsm/foto-kelas-tbsm4/post-kelas-tbsm4">
                <Button variant="success">Post Foto </Button>
              </Link>
            </div>
          </div>

          <BootstrapTable
            keyField="id"
            data={this.state.users}
            columns={columns}
            bordered={false}
          />
          <Link to="/admin/tbsm">
                <Button variant="light">Kembali </Button>
              </Link>
        </div>
      </div>
    );
  }
}

export default KelasTbsm4;
