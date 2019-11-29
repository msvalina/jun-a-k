import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";


export const GET_REPORT_DETAILS = gql`
  query ReportDetails($reportId: ID!) {
    report(id: $reportId) {
      id
      createdAt
      description
      location
    }
  }
`;

export default function Report() {
  let { reportId } = useParams();

  const { data, loading, error } = useQuery(GET_REPORT_DETAILS, {
    variables: { reportId }
  });

  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only"> Loading...</span>
      </Spinner>
    );
  if (error) {
    console.log(error);
    return (
      <>
        <br />
        <br />
        <p>some paragraph</p>
        <p>{reportId}</p>
        <p>ERROR </p>
      </>
    );
  }
  return (
      <Fragment>
        {data.report && (
          <Card key={data.report.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {data.report.location} {data.report.id}
              </Card.Title>
              <Card.Text>{data.report.description}</Card.Text>
              <Button variant="light">Do something</Button>
            </Card.Body>
          </Card>
        )}
      </Fragment>
  );
}
