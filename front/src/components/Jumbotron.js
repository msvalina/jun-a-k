import React from 'react';
import {
  Jumbotron as Jumbo,
  Container,
  Button,
  Nav,
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heroImage from '../assets/images/boy-junak-big.jpeg';

const Styles = styled.div`
  .jumbo {
    background: url(${heroImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 1100px;
    position: relative;
    z-index: 0;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .btn {
    z-index: 1;
  }
`;


export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Be a Jun[a]k Hero!</h1>
        <p>Save the planet!</p>
        <p>Reporting one wild dump at a time!</p>
        <p>Get Bitcoins for it!</p>
        <Button size="lg" variant="dark" className="btn">
        <Nav.Link as={Link} to="/report" className="btn-dark">Report</Nav.Link>
        </Button>
      </Container>
    </Jumbo>
  </Styles>
)
