import { Card, Col, Divider, Icon, Input, Row, Spin } from 'antd';
import * as queryString from 'query-string';
import * as React from 'react';
import { compose, withApollo } from 'react-apollo';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReportDeleteMutation, ReportsQuery } from '../../generatedModels';
import CreateReportForm from './CreateReportForm';

interface IReportsState {
    searchQuery?: string;
}

interface IReportsBaseProps {
    deleteReport: ReportDeleteMutation.MutationFn;
}

type IReportsProps = ReportsQuery.Props<IReportsBaseProps> & RouteComponentProps;

class Reports extends React.Component<IReportsProps, IReportsState> {
    constructor(props: IReportsProps) {
        super(props);
        const query = queryString.parse(props.location.search);
        this.state = {
            searchQuery: query && query.search
                ? query.search.toString()
                : undefined
        };
    }

    public render() {
        const { searchQuery } = this.state;
        const { data } = this.props;

        return (
            <Row>
                <Col span={12} offset={6}>
                    <Divider>Create Report</Divider>
                    <CreateReportForm
                        onSuccess={this.handleCreateReportFormSuccess}
                    />
                    <Divider>Reports</Divider>
                    <Input.Search
                        placeholder="Search..."
                        enterButton="Search"
                        defaultValue={searchQuery}
                        onChange={this.handleSearchQueryChange}
                        onSearch={this.handleSearch}
                    />
                    {data!.loading ? (
                        <Spin style={{ marginTop: 16, display: 'block' }} />
                    ) : (
                        <div>
                            {data!.reports!.edges.map(edge => (
                                <Card
                                    key={edge!.node!.id}
                                    style={{ marginTop: 16 }}
                                    actions={[
                                        <Icon
                                            type="delete"
                                            key={edge!.node!.id}
                                            onClick={() => this.handleDeleteReport(edge!.node!.id)}
                                        />
                                    ]}
                                >
                                    <Card.Meta
                                        title={edge!.node!.location}
                                        description={edge!.node!.description}
                                    />
                                </Card>
                            ))}
                        </div>
                    )}
                </Col>
            </Row>
        );
    }

    private handleSearchQueryChange = (event: any) => {
        this.setState({
            searchQuery: event.target.value || undefined
        });
    };

    private handleSearch = () => {
        const { searchQuery } = this.state;
        const { history, location } = this.props;

        history.push({
            pathname: location.pathname,
            search: queryString.stringify({
                search: searchQuery
            })
        });
    };

    private handleCreateReportFormSuccess = () => {
        const { data } = this.props;
        return data!.refetch();
    };

    private handleDeleteReport = (id: string) => {
        const { data, deleteReport } = this.props;
        return deleteReport({ variables: { id } })
            .then(() => data!.refetch());
    };
}

export default compose(
    withApollo,
    withRouter,
    ReportsQuery.HOC({
        options: (props: IReportsProps) => ({
            variables: queryString.parse(props.location.search)
        })
    }),
    ReportDeleteMutation.HOC({
        props: ({ mutate }) => ({
            deleteReport: mutate
        })
    })
)(Reports);

