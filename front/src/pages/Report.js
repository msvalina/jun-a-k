import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import TimeAgo from "react-timeago";

import DeleteReport from "../containers/DeleteReport";

import heroImageSmall from "../assets/images/boy-junak-small.jpeg";

export const GET_REPORT_DETAILS = gql`
  query ReportDetails($reportId: ID!) {
    report(id: $reportId) {
      id
      image
      createdAt
      description
      location
      status
      lat
      lon
    }
  }
`;

export default function Report() {
  let { reportId } = useParams();

  const url = window.API_MEDIA_URL;
  const defaultImage = heroImageSmall;

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
          <Card.Img
            variant="top"
            src={data.report.image ? url + data.report.image : defaultImage}
          />
          <Card.Body>
            <Card.Title>
              Report #{data.report.id} - {data.report.location}
            </Card.Title>
            <Card.Text>{data.report.description}</Card.Text>
            <div className="space-between-positions">
              <Button
              variant="light"
              className="flex-item"
              href={'https://www.google.com/maps/search/?api=1&query=' + data.report.lat + ',' + data.report.lon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-1x" />
                <span> Show Location</span>
              </Button>
              <DeleteReport className="flex-item" reportId={data.report.id} />
            </div>
          </Card.Body>
          <Card.Footer className="text-muted space-between-positions">
            <div className="flex-item">Status: {data.report.status}</div>
            <div className="flex-item">
              Reported: <TimeAgo date={data.report.createdAt} />
            </div>
          </Card.Footer>
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
  width: 95vw;
  flex-grow: 1;

  .card-extra {
    margin-bottom: 30px;
    width: 100%;
    /* width: 600px; */
  }

  .space-between-positions {
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
  }

  .flex-item {
    display: flex;
  }
`;
