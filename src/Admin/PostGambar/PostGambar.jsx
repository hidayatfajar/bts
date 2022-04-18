import React, {Component} from 'react';
import { Nav, Navbar, Container, FloatingLabel, Form, Button, Card} from 'react-bootstrap';
import './PostGambar.css';
import search from '../Assets/icons-search.svg';
import notif from '../Assets/icons-notifikasi.svg';
import img from '../Assets/icons-img.svg';

class Bts extends Component{
  render(){
    return(
      <div>
        {/* NAVBAR */}
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{color:'#FFF'}}>MEMO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                
                
                <Nav.Link href="#link"><img src={search} alt="" /></Nav.Link>
                <Nav.Link href="#link"><img src={notif} alt="" /></Nav.Link>
                <Nav.Link href="#link" style={{color:'#FFF'}}>Nama Admin</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      {/* AKHIR NAVBAR */}

        {/* KONTEN */}
        <section>
          <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3'}}>
            <div className="row mt-5" >
              <h1>Buat Post</h1>
              
              <div className="col-md-6 mt-5">
                  <img src={img} alt="" />
                  <p>Drop your image here or</p>
              </div>

              <div className="col-md-6">
              <>
              <h6>Nama</h6>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nama"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <h6>Quotes</h6>
                <FloatingLabel controlId="floatingPassword" label="Quotes">
                  <Form.Control type="password" placeholder="Quotes" style={{height:'100px'}}/>
                </FloatingLabel>
            </>
                
                <Button variant="light" className="mt-4 btn1">...</Button>
                <Button variant="primary" className="mt-4 btn2">Post</Button>

              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5">
            <Button variant="light" style={{color:'#000', fontWeight:'bold'}}>Kembali</Button>
          </div>
        </section>
      </div>
    )
  }
}

export default Bts