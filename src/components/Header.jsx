import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="luxo-header">
    <Container>
        <Navbar.Brand className="luxo-brand">LUXOO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="luxo-links">LOGIN</Nav.Link>
            <Nav.Link className="luxo-links">SIGNUP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;