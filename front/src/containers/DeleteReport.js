import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Button from "react-bootstrap/Button";

export const DELETE_REPORT = gql`
  mutation ReportDeleteMutation($id: ID!) {
    reportDelete(id: $id) {
      ok
    }
  }
`;

export default function DeleteReport({ reportId }) {
  const [deleteReport, { data }] = useMutation(DELETE_REPORT, {
    variables: { id: reportId }
  });

  return data && data.reportDelete && !data.reportDelete.ok ? (
    <p data-testid="message">Failed to delete report {reportId}</p>
  ) : (
    <Button onClick={deleteReport} >
      Delete Report
    </Button>
  );
}
