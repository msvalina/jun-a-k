import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import  DeleteReport  from '../containers/DeleteReport';

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
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  if (error) {
    console.log(error);
    return (
      <>
        <br />
        <br />
        <p>Report ID: {reportId}</p>
        <p>ERROR </p>
      </>
    );
  }
  return (
      <CardStyle>
        {data.report && (
          <Card key={data.report.id} bg="dark" className="card-extra">
            <Card.Body>
              <Card.Title>
                {data.report.location} {data.report.id}
              </Card.Title>
              <Card.Text>{data.report.description}</Card.Text>
              <Button variant="light">Do something</Button>
              <DeleteReport reportId={data.report.id} />
            </Card.Body>
          </Card>
        )}
      </CardStyle>
  );
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 550px;
  flex-grow: 1;

  .card-extra {
    margin-bottom: 30px;
    width: 100%;
    /* width: 600px; */
  }
`;
