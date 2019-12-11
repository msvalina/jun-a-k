import React, { Fragment } from "react";
import ReportForm from "./ReportForm";
import styled from "styled-components";

const HeaderStyle = styled.div`
  h1 {
    padding-bottom: 50px !important;
    text-align: center;
  }

  h3,
  h4 {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
    text-align: center;
  }
`;
const FormStyle = styled.div`
  padding-top: 50px !important;
`;

export const Home = props => {
  return (
    <Fragment>
      <HeaderStyle>
        <h1>Be Jun[a]k Hero<span role="img" aria-label="superhero">🦸</span> </h1>
        <h3>Save the planet!<span role="img" aria-label="earth africa">🌍</span></h3>
        <h3>Report one wild dump at a time<span role="img" aria-label="heart">💗</span></h3>
        <h3>We will take care of it<span role="img" aria-label="weight-lifter">🏋️</span></h3>
        <h3>Do you know any wild dump location?</h3>
      </HeaderStyle>
      <FormStyle>
        {props.location.state && props.location.state.cameraPhoto ? (
          <ReportForm cameraPhoto={props.location.state.cameraPhoto} />
        ) : (
          <ReportForm />
        )}
      </FormStyle>
    </Fragment>
  );
};
