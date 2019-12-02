import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ReportForm } from './ReportForm';

export const Home = () => (
  <Fragment>
    <h1>Be Jun[a]k Hero!</h1>
    <p>Save the planet!</p>
    <p>Reporting one wild dump at a time!</p>
    <p>We will take care of it!</p>
    <LinkContainer to="/photo">
      <Button size="lg" variant="dark">
        Report
      </Button>
    </LinkContainer>
    <ReportForm />
  </Fragment>
);
