import React, {Component} from 'react';
import {FloatingLabel, Form, Button} from 'react-bootstrap';
import { Link} from "react-router-dom";
import './PostSiswaTkj2.css';
import img from '../../../../Assets/icons-img.svg';

class PostSiswaTkj2 extends Component{
  render(){
    return(
      <div> 

      
        {/* KONTEN */}
        <section className="kontent">
          <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3', padding:'20px'}}>
            <div className="content">
              <div className="row">
                <h2 className='mt-3'>Post Foto Siswa TKJ 2</h2>
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
            <Button className="button2 mt-4" variant="primary">Post</Button>{' '}
            </div>
          </div>
          <div className="container mt-3">
          <Link to="/admin/tkj/foto-siswa-tkj2"> 
            <Button variant="light">Kembali</Button>
          </Link>
          </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PostSiswaTkj2