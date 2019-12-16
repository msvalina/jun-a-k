import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
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
  const [redirect, setRedirect] = useState(false);
  const [deleteReport, { data }] = useMutation(DELETE_REPORT, {
    variables: { id: reportId }
  });

  const handleDelete = () => {
    deleteReport();
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect push
        to={{
          pathname: "/reports",
          state: { referer: "/report/" + reportId }
        }}
      />
    );
  }

  return data && data.reportDelete && !data.reportDelete.ok ? (
    <p data-testId="message">Failed to delete report {reportId}</p>
  ) : (
    <Button onClick={handleDelete} >
      Delete Report
    </Button>
  );
}
