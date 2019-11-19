import { Button, Form, Input } from 'antd';
import * as React from 'react';
import { compose, withApollo } from 'react-apollo';
import { ReportCreateMutation } from '../../generatedModels';

interface ICreateReportFormState {
    reportDescription: string;
}

interface ICreateReportFormProps {
    createReport: ReportCreateMutation.MutationFn;
    onSuccess: () => any;
}

class CreateReportForm extends React.Component<ICreateReportFormProps, ICreateReportFormState> {
    public state: ICreateReportFormState = {
        reportDescription: '',
    }

    public render() {
        const { reportDescription, } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    <Input.TextArea
                        placeholder="Description"
                        value={reportDescription}
                        onChange={this.handleReportDescriptionChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Create</Button>
                </Form.Item>
            </Form>
        );
    }

    private handleReportDescriptionChange = (event: any) => {
        this.setState({ reportDescription: event.target.value });
    };

    private handleSubmit = (event: any) => {
        event.preventDefault();
        const { reportDescription, } = this.state;
        const { createReport, onSuccess } = this.props;

        return createReport({ variables: { input: { description: reportDescription } } })
            .then(() => {
                this.setState({ reportDescription: '',  });
                return onSuccess();
            });
    }
}

export default compose(
    withApollo,
    ReportCreateMutation.HOC({
        props: ({ mutate }) => ({
            createReport: mutate
        })
    }),
)(CreateReportForm);