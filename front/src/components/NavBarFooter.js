import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
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
`;

export const NavBarFooter = () => (
  <Styles>
    <Navbar
      fixed="bottom"
      sticky="bottom"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faHome} /> Jun[a]K
      </Navbar.Brand>
      <Nav className="mr-auto">
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
