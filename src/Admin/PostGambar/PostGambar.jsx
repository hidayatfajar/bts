import React, {Component} from 'react';
import { Nav, Navbar, Container, FloatingLabel, Form, Button} from 'react-bootstrap';
import './PostGambar.css';
import search from '../Assets/icons-search.svg';
import notif from '../Assets/icons-notifikasi.svg';
import img from '../Assets/icons-img.svg';
// import './SideBar.js';

class Bts extends Component{
  render(){
    return(
      <div>
        {/* NAVBAR */}
        {/* <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{color:'#FFF'}}>MEMO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'white'}}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto nav">
                <Nav.Link href="#link" className="nav1"><img src={search} alt="" /></Nav.Link>
                <Nav.Link href="#link" className="nav2"><img src={notif} alt="" /></Nav.Link>
                <Nav.Link href="#link" style={{color:'#FFF'}} className="nav3">Nama Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar> */}
      {/* AKHIR NAVBAR */}

      
        {/* KONTEN */}
        <section className="kontent">
          <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3'}}>
            <div className="content">
              <div className="row mt-5">
                <h2 className='mt-3'>Buat Post</h2>
              </div>
            </div>

          <div className="row mt-5">
            <div className="col-md-4 box">
              <img className="mt-3" src={img} alt="" />
            <p className="text-center">Drop your image here or</p>
            <p className="text-center"><a href="#browse">browse</a></p>
            </div>

            <div className="col-md-6 input">
            <>
              <h5>Nama</h5>
              <FloatingLabel controlId="floatingTextarea" label="Input Nama" className="mb-3 input-text">
                <Form.Control 
                as="textarea" 
                placeholder="Leave a comment here" 
                
                />
              </FloatingLabel>
              <h5>Quotes</h5>
              <FloatingLabel controlId="floatingTextarea2" label="Input Quotes" className="input-text">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </>

            <Button className="button1 mt-4" variant="light">...</Button>{' '}
            <Button className="button2 mt-4" variant="primary">Post</Button>{' '}
            </div>
          </div>
          </div>
        </section>

        <section>
          <div className="container mt-5">
          <Button variant="light">Kembali</Button>
          </div>
        </section>
      </div>
    )
  }
}

export default Bts