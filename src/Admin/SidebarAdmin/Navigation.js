import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
const Navigation = () => {
  return (
    <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">MEMO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navigation