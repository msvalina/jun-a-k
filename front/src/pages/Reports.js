import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { LinkContainer } from "react-router-bootstrap";
import TimeAgo from "react-timeago";

import heroImageSmall from "../assets/images/boy-junak-small.jpeg";

const GET_REPORTS = gql`
  query reportsList($after: String) {
    reports(first: 7, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          image
          createdAt
          description
          location
          status
        }
      }
    }
  }
`;


export default function Reports(props) {
  const { data, loading, error, fetchMore, refetch, networkStatus} = useQuery(
    GET_REPORTS,
    {
      notifyOnNetworkStatusChange: true,
    });

  const url = window.API_MEDIA_URL;
  const defaultImage = heroImageSmall;

  if (
    props.location.state &&
    props.location.state.referer &&
    props.location.state.referer === "/"
  ) {
    console.log("refetching")
    refetch();
    window.scrollTo(0, 0);
    props.location.state.referer = "/reports";
  }

  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  if (error) {
    console.log(error);
    return <p>ERROR </p>;
  }
  if (networkStatus === 4)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Refetching...</span>
      </Spinner>
    );


  return (
    <CardStyle>
      {data.reports &&
        data.reports.edges &&
        data.reports.edges.map(edge => (
          <Card key={edge.node.id} bg="dark" className="card-extra">
            <Card.Img
              variant="top"
              src={edge.node.image ? url + edge.node.image : defaultImage}
            />
            <Card.Body>
              <Card.Title>
                Report #{edge.node.id} - {edge.node.location}
              </Card.Title>
              <Card.Text>{edge.node.description}</Card.Text>
              <LinkContainer exact to={`/report/${edge.node.id}`}>
                <Button variant="light">Show More</Button>
              </LinkContainer>
            </Card.Body>
            <Card.Footer className="text-muted space-between-positions">
              <div className="flex-item">Status: {edge.node.status}</div>
              <div className="flex-item">
                Reported: <TimeAgo date={edge.node.createdAt} />
              </div>
            </Card.Footer>
          </Card>
        ))}
      {data.reports &&
        data.reports.pageInfo &&
        data.reports.pageInfo.hasNextPage && (
          <Button
            onClick={() =>
              fetchMore({
                variables: {
                  after: data.reports.pageInfo.endCursor
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                  if (!fetchMoreResult) return prev;
                  return {
                    ...fetchMoreResult,
                    reports: {
                      ...fetchMoreResult.reports,
                      edges: [
                        ...prev.reports.edges,
                        ...fetchMoreResult.reports.edges
                      ]
                    }
                  };
                }
              })
            }
          >
            Load More
          </Button>
        )}
    </CardStyle>
  );
}

// TODO: Put CardStyle in separate css file it used in Report.js also
const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 90vw;
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
