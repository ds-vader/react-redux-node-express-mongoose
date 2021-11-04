import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navibar = () => {
  return (
    <Navbar collapseOnSelect bg="light">
      <Navbar.Brand href="/">Product market</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
