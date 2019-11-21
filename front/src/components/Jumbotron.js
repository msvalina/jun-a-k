import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import heroImage from '../assets/images/boy-junak-big.jpeg';

const Styles = styled.div`
  .jumbo {
    background: url(${heroImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 900px;
    position: relative;
    z-index: -2;
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
      </Container>
    </Jumbo>
  </Styles>
)
