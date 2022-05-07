import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./Ak.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link} from "react-router-dom";
import { FaEdit } from "react-icons/fa";



class Ak extends Component {
  state = {
    users:[
      {
        kelas: "XII AKUNTANSI 1",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "ak1"
      },
      {
        kelas: "XII AKUNTANSI 2",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "ak2"
      },
      {
        kelas: "XII AKUNTANSI 3",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "ak3"
      }
    ]
  }
  render() {
    const columns = [
      {
        dataField: "kelas",
        text: "Kelas"
        // make delete and update button
        // formatter: (cellContent, row) => {
        //   return (
        //     <div>
        //       <Link to={`/admin/ak/list-${row.list}`} style={{textDecoration:'none', color:'black'}}>
        //       {row.kelas}
        //       </Link>
        //     </div>
        //   );
        // }

      },
      {
        dataField: "foto",
        text: "Foto Terupload",
      },
      {
        dataField: "diperbarui",
        text: "Diperbarui",
      },
      {
        text: "Foto Kelas",
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
                <Col md={12}>
                  <Link to={`/admin/ak/foto-kelas-${row.list}`}>
                    <Button variant="primary" className="mr-2" block>
                      {" "}
                      <FaEdit />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          );
        },
        
      },
      {
        text: "Foto Siswa",
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
                <Col md={12}>
                  <Link to={`/admin/ak/foto-siswa-${row.list}`}>
                    <Button variant="primary" className="mr-2" block>
                      {" "}
                      <FaEdit />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          );
        },
      }
    ];
    return (
      <div>
        <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3',padding:'60px'}}>
          <div id="row">
            <h3> Pilih Kelas </h3>
          </div>
          
          <BootstrapTable keyField='id' data={ this.state.users } columns={ columns } bordered={false}/>
      
        </div>        
      </div>
    );
  }
}

export default Ak;
