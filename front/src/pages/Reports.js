import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import { Layout } from "../components";

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
    <Layout>
      <Fragment>
        {data.reports &&
          data.reports.edges &&
          data.reports.edges.map(edge => (
            <Card key={edge.node.id} style={{ width: "18rem" }}>
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
      </Fragment>
    </Layout>
  );
}
