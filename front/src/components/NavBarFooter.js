import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faCamera,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    padding: 20px;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  /* set footer navbar to not hide main content */
  .phantom {
    display: block;
    padding: 20px;
    height: 100px;
    width: 100%;
  }

`;

export const NavBarFooter = () => (
  <Styles>
    <Container className="phantom"/>
    <Navbar
      fixed="bottom"
      sticky="bottom"
      bg="dark"
      variant="dark"
      className="justify-content-center"
    >
      <Nav className="justify-content-center">
        <Nav.Link eventKey="1" as={Link} to="/">
        <FontAwesomeIcon icon={faHome} /> Jun[a]K
        </Nav.Link>
        <Nav.Link eventKey="2" as={Link} to="/about">
          <FontAwesomeIcon icon={faUsers} /> About
        </Nav.Link>
        <Nav.Link eventKey="4" as={Link} to="/photo">
          <FontAwesomeIcon icon={faCamera} /> Photo
        </Nav.Link>
        <Nav.Link eventKey="5" as={Link} to="/reports">
          <FontAwesomeIcon icon={faPlusCircle} /> Reports
        </Nav.Link>
      </Nav>
    </Navbar>
  </Styles>
);
