import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export const PageContainer = props => {
  return (
    <Fragment>
      <Padding>
        <Container>{props.children}</Container>
      </Padding>
    </Fragment>
  );
};

const Padding = styled.div`
  /* display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 600;
  margin: 0 auto; */
  padding: 21;
  padding-bottom: 45;
`;
