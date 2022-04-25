import React from 'react'
import { Table, Button, Nav, Card, Tabs, Tab} from 'react-bootstrap'
import "./Ak.css";
import { Link, Route } from "react-router-dom";
import Cart from "../Dashboard/Cart/Cart";
import sort from "../Assets/icons-sort.svg";
import filter from "../Assets/icons-filter.svg";
import ListAk1 from "./ListAk1/ListAk1";
import ListAk2 from "./ListAk2/ListAk2";
import ListAk3 from "./ListAk3/ListAk3";


export default function PilihKelas() {
  return (
        <div>
          <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3', padding:'20px'}}>
          {/* <div id="row">
            <h3> Pilih Kelas </h3>
              <div id="end">
                <Link to="/admin">
                  <Button variant="success">Tambah Kelas</Button>
                </Link>
                <img src={sort} alt="" style={{marginRight:'5px'}}/>
                <span className="mt-3" style={{marginRight:'20px'}}>Sort</span>
                <img src={filter} alt="" style={{marginRight:'5px'}}/>
                <span className="mt-3"> Filter</span>
              </div>
          </div>
          
            <Table responsive="sm" className='mt-5'>
            <thead>
              <tr>
                <th>Kelas</th>
                <th>Foto Terupload</th>
                <th>Terakhir diperbarui</th>
              </tr>
            </thead>
            <tbody>
              <Link to="">
              <tr>
                  <td>XII AKUNTANSI 1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
              </tr>
              </Link>
              
              
              <tr>
                <td>XII AKUNTANSI 2</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>XII AKUNTANSI 3</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table> */}
          <Tabs
              defaultActiveKey="ak1"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="ak1" title="AKUNTANSI 1">
                <br />
                <ListAk1 />
              </Tab>
              <Tab eventKey="ak2" title="AKUNTANSI 2">
                <br />
                <ListAk2 />
              </Tab>
              <Tab eventKey="ak3" title="AKUNTANSI 3">
                <br />
                <ListAk3 />
              </Tab>
            </Tabs>
          </div>        
          
        


      </div>
  )
}
