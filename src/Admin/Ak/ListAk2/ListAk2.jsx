import React from 'react'
import { Table, Button, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap'
import { Link, Route } from "react-router-dom";
import sort from "../../Assets/icons-sort.svg";
import filter from "../../Assets/icons-filter.svg";
import Cart from "../../Dashboard/Cart/Cart";
import "./ListAk2.css";

export default function ListAk() {
  return (
    <div>
          <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3', padding:'60px'}}>
          <div id="row">
            <h3> AKUNTANSI 2 </h3>
              <div id="end">
                <Link to="/admin">
                  <Button variant="success">Post Gambar</Button>
                </Link>
                <img src={sort} alt="" style={{marginRight:'5px'}}/>
                <span className="mt-3" style={{marginRight:'20px'}}>Sort</span>
                <img src={filter} alt="" style={{marginRight:'5px'}}/>
                <span className="mt-3"> Filter</span>
              </div>
          </div>
          
            <Table responsive="sm">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Tema</th>
                <th>Quotes</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                <td><img src="https://placeimg.com/70/40/tech" alt="" /></td>
                <td>Isi Tema</td>
                <td>Isi Quotes</td>
                <td>April 25, 2022</td>
                <td>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger" >Delete</Button>
                </td>
              </tr>
              <tr>
                <td><img src="https://placeimg.com/70/40/tech" alt="" /></td>
                <td>Isi Tema</td>
                <td>Isi Quotes</td>
                <td>April 25, 2022</td>
                <td>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger" >Delete</Button>
                </td>
              </tr>
              <tr>
              <td><img src="https://placeimg.com/70/40/tech" alt="" /></td>
                <td>Isi Tema</td>
                <td>Isi Quotes</td>
                <td>April 25, 2022</td>
                <td>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger" >Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
          
          <div id="row" style={{float:'right'}}>
              <div id="end">
              <InputGroup className="mb-3" style={{width:'150px'}}>
                <DropdownButton
                  variant="light"
                  title="Row per page"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">1</Dropdown.Item>
                  <Dropdown.Item href="#">2</Dropdown.Item>
                  <Dropdown.Item href="#">3</Dropdown.Item>
                  <Dropdown.Item href="#">4</Dropdown.Item>
                  <Dropdown.Item href="#">4</Dropdown.Item>
                  <Dropdown.Item href="#">5</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
  <p className="page">1-5 of 600</p>
              </div>
          </div>

          
          
          </div>        
        

          <Route exact path="/admin"  component={Cart} />
          <Route exact path="admin/ak/list-ak"  component={ListAk} />

      </div>
  )
}
