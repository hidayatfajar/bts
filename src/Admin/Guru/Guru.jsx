import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import "./Guru.css";
import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

class Guru extends Component {
  state = {
    users: [
      {
        foto: "img",
        nama: "Nama",
        jabatan: "Jabatan",
        action: "08561310250",
      },
      {
        foto: "img",
        nama: "Nama",
        jabatan: "Jabatan",
        action: "08561310250",
      },
      {
        foto: "img",
        nama: "Nama",
        jabatan: "Jabatan",
        action: "08561310250",
      },
      {
        foto: "img",
        nama: "Nama",
        jabatan: "Jabatan",
        action: "08561310250",
      },
      {
        foto: "img",
        nama: "Nama",
        jabatan: "Jabatan",
        action: "08561310250",
      },
    ],
  };
  render() {
    const columns = [
      {
        text: "Foto",
        align: "center",
        headerStyle: {
          width: "240px",
          textAlign: "center",
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
        dataField: "nama",
        text: "Nama",
      },
      {
        dataField: "jabatan",
        text: "Jabatan",
      },
      {
        text: "Aksi",
        align: "center",
        headerStyle: {
          width: "240px",
          textAlign: "center",
        },
        // make delete and update button
        formatter: (cellContent, row) => {
          return (
            <div>
              {/* <Sidebar /> */}
              <Row>
                <Col md={6}>
                  <Link to={`/admin/guru/edit-guru`}>
                    <Button variant="primary" className="mr-2" block>
                      {" "}
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </Link>
                </Col>
                <Col md={6}>
                  <Link to={`/admin/siswa/ubah/${row.siswa_id}`}>
                    <Button variant="danger" className="mr-2" block>
                      {" "}
                      <FontAwesomeIcon icon={faTrash} />
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
            <h3> FOTO GURU </h3>
            <div id="end">
              <Link to="/admin/guru/post-foto-guru">
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
        </div>
      </div>
    );
  }
}

export default Guru;
