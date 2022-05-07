import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./Rpl.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link} from "react-router-dom";
import { FaEdit } from "react-icons/fa";



class Rpl extends Component {
  state = {
    users:[
      {
        kelas: "XII REKAYASA PERANGKAT LUNAK 1",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "rpl1"
      },
      {
        kelas: "XII REKAYASA PERANGKAT LUNAK 2",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "rpl2"
      },
      {
        kelas: "XII REKAYASA PERANGKAT LUNAK 3",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "rpl3"
      }
    ]
  }
  render() {
    const columns = [
      {
        dataField: "kelas",
        text: "Kelas",
        headerStyle:{
          width:'300px'
        },
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
        headerStyle:{
          width: '180px'
        }
      },
      {
        dataField: "diperbarui",
        text: "Diperbarui",
        headerStyle:{
          width: '150px'
        }
      },
      {
        text: "Foto Kelas",
        align: "center",
        headerStyle: {
          width: "180px",
          textAlign: "center",
        },
        // make delete and update button
        formatter: (cellContent, row) => {
          return (
            <div>
              {/* <Sidebar /> */}
              <Row>
                <Col md={12}>
                  <Link to={`/admin/rpl/foto-kelas-${row.list}`}>
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
          width: "180px",
          textAlign: "center",
        },
        // make delete and update button
        formatter: (cellContent, row) => {
          return (
            <div>
              {/* <Sidebar /> */}
              <Row>
                <Col md={12}>
                  <Link to={`/admin/rpl/foto-siswa-${row.list}`}>
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

export default Rpl;
