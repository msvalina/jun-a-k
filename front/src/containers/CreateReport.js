//import React, { useMutation, useQuery } from "react";
import gql from "graphql-tag";

const typeDefs = `
  enum Status {
    WAITING_CONFIRMATION
    CONFIRMED
    CLEANED
    WONT_CLEAN
  }
`

export const CREATE_REPORT = gql`
  mutation createReport(
    $location: String!
    $lon: Float
    $lat: Float
    $image: String
    $description: String
    $status: Status
  ) {
    reportCreate( input: {
      location: $location
      lon: $lon
      lat: $lat
      image: $image
      description: $description,
      status: $status }
    ) {
      report {
        id
        image
        createdAt
        lon
        lat
        location
        description
        status
      }
    }
  }
`;
