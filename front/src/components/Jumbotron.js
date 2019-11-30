import React, { Fragment } from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import heroImage from "../assets/images/boy-junak-big.jpeg";

const Styles = styled.div`
  .jumbo {
    background: url(${heroImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 1600px;
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

  .bring-to-front {
    z-index: 1;
  }
`;

const Bar = styled.div`
  flex-shrink: 0;
  height: 10px;
`;

export const Jumbotron = props => (
  <Fragment>
    <Bar className="bg-dark" />
    <Styles>
      <Jumbo fluid={true} className="jumbo">
        <div className="overlay" />
        <div className="bring-to-front">{props.children}</div>
      </Jumbo>
    </Styles>
  </Fragment>
);
