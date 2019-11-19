export type Maybe<T> = T | null;

export interface ReportInputType {
  description?: Maybe<string>;

  location?: Maybe<string>;

  lon?: Maybe<number>;

  lat?: Maybe<number>;
}

/** The `DateTime` scalar type represents a DateTime value as specified by [iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export namespace ReportsQuery {
  export type Variables = {
    search?: Maybe<string>;
  };

  export type Query = {
    __typename?: "Query";

    reports: Maybe<Reports>;
  };

  export type Reports = {
    __typename?: "ReportTypeConnection";

    edges: (Maybe<Edges>)[];
  };

  export type Edges = {
    __typename?: "ReportTypeEdge";

    node: Maybe<Node>;
  };

  export type Node = {
    __typename?: "ReportType";

    id: string;

    location: string;

    description: string;
  };
}

export namespace ReportCreateMutation {
  export type Variables = {
    input: ReportInputType;
  };

  export type Mutation = {
    __typename?: "Mutation";

    reportCreate: Maybe<ReportCreate>;
  };

  export type ReportCreate = {
    __typename?: "ReportCreate";

    report: Maybe<Report>;
  };

  export type Report = {
    __typename?: "ReportType";

    id: string;
  };
}

export namespace ReportDeleteMutation {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    reportDelete: Maybe<ReportDelete>;
  };

  export type ReportDelete = {
    __typename?: "ReportDelete";

    ok: Maybe<boolean>;
  };
}

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export namespace ReportsQuery {
  export const Document = gql`
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
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace ReportCreateMutation {
  export const Document = gql`
    mutation ReportCreateMutation($input: ReportInputType!) {
      reportCreate(input: $input) {
        report {
          id
        }
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace ReportDeleteMutation {
  export const Document = gql`
    mutation ReportDeleteMutation($id: ID!) {
      reportDelete(id: $id) {
        ok
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
