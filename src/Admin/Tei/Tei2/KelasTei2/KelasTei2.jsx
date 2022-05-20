import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import "./KelasTei2.css";
import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

class KelasTei2 extends Component {
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
                  <Link to={`/admin/tei/edit-kelas-tei2`}>
                    <Button variant="primary" className="mr-2" block>
                      {" "}
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </Link>
                </Col>
                <Col md={3}>
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
            <h3> FOTO KELAS TEKNIK ELEKTRONIKA INDUSTRI 2 </h3>
            
            <div id="end">
              <Link to="/admin/tei/foto-kelas-tei2/post-kelas-tei2">
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
          <Link to="/admin/tei">
                <Button variant="light">Kembali </Button>
              </Link>
        </div>
      </div>
    );
  }
}

export default KelasTei2;
