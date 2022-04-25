import React from 'react'
import { Table, Button } from 'react-bootstrap'
import "./Tei.css";
import { Link, Route } from "react-router-dom";
import Cart from "../Dashboard/Cart/Cart";
import sort from "../Assets/icons-sort.svg";
import filter from "../Assets/icons-filter.svg";


export default function PilihKelas() {
  return (
        <div>
          <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3', padding:'20px'}}>
          <div id="row">
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
              <tr>
                <td>XII TEKNIK ELEKTRONIKA INDUSTRI 1</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>XII TEKNIK ELEKTRONIKA INDUSTRI 2</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>XII TEKNIK ELEKTRONIKA INDUSTRI 3</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>XII TEKNIK ELEKTRONIKA INDUSTRI 4</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
          </div>        
        

          <Route exact path="/admin"  component={Cart} />

      </div>
  )
}
