import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Jun[a]K</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/about">About</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/report">Report</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
