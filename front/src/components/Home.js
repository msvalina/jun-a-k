import React, { Fragment } from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => (
  <Fragment>
    <h1>Be a Jun[a]k Hero!</h1>
    <p>Save the planet!</p>
    <p>Reporting one wild dump at a time!</p>
    <p>Get Bitcoins for it!</p>
    <Button size="lg" variant="dark">
      <Nav.Link as={Link} to="/photo" className="btn-dark">
        Report
      </Nav.Link>
    </Button>
  </Fragment>
);
