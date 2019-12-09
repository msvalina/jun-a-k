import React, { Fragment } from "react";
import ReportForm from './ReportForm';
import styled from "styled-components";

const HeaderStyle = styled.div`
  h3,h4 {
    padding-top: 25px !important;
    padding-bottom: 25px !important;
    text-align: center;
  }
`;

export const Home = () => (
  <Fragment>
    <h1>Be Jun[a]k Hero</h1>
    <HeaderStyle>
      <h3>Save the planet!</h3>
      <h3>Report one wild dump at a time</h3>
      <h4>We will take care of it</h4>
      <h4>Do you know any wild dump location?</h4>
    </HeaderStyle>
    <ReportForm />
  </Fragment>
);
