//import React, { useMutation, useQuery } from "react";
import gql from "graphql-tag";

export const CREATE_REPORT = gql`
  mutation createReport(
    $location: String!
    $lon: Float
    $lat: Float
    $image: String
    $description: String
  ) {
    reportCreate( input: {
      location: $location
      lon: $lon
      lat: $lat
      image: $image
      description: $description }
    ) {
      report {
        id
        image
        createdAt
        lon
        lat
        location
        description
      }
    }
  }
`;
