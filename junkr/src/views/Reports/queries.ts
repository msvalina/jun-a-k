import gql from 'graphql-tag';

export const REPORTS_QUERY = gql`
    query ReportsQuery($search: String) {
        reports(search: $search) {
            edges {
                node {
                    id
                    location
                    description
                }
            }
        }
    }
`;

export const REPORT_CREATE_MUTATION = gql`
    mutation ReportCreateMutation($input: ReportInputType!) {
        reportCreate(input: $input) {
            report {
                id
            }
        }
    }
`;

export const REPORT_DELETE_MUTATION = gql`
    mutation ReportDeleteMutation($id: ID!) {
        reportDelete(id: $id) {
            ok
        }
    }
`;