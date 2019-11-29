import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

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
          createdAt
          description
          location
        }
      }
    }
  }
`;

export default function Reports() {
  const { data, loading, error, fetchMore } = useQuery(GET_REPORTS);
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

  return (
      <CardStyle>
        {data.reports &&
          data.reports.edges &&
          data.reports.edges.map(edge => (
            <Card key={edge.node.id} bg="dark" className="card-extra">
              <Card.Body>
                <Card.Title>
                  {edge.node.location} {edge.node.id}
                </Card.Title>
                <Card.Text>{edge.node.description}</Card.Text>
                <Button variant="light">Do something</Button>
              </Card.Body>
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

