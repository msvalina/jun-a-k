import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export const PageContainer = props => {
  return (
    <Fragment>
      <Padding>
        <Container className="cont">{props.children}</Container>
      </Padding>
    </Fragment>
  );
};

const Padding = styled.div`
  padding: 21;
  padding-bottom: 45;
  .cont {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    text-align: left;
  }
`;
