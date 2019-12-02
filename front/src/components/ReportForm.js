import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const FormStyle = styled.div`
  margin: 50 px;
`;

export const ReportForm = () => (
  <FormStyle>
    <Form>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Enter description" />
        <Form.Text className="text-muted">
          We'll read your description. Thank you for writing.
        </Form.Text>
        <Form.Label>Location</Form.Label>
        <Form.Control as="input" placeholder="Enter Location" />
        <Form.Text className="text-muted">
          Please confirm location of the dump.
        </Form.Text>
        <Upload />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </FormStyle>
);

export const Upload = () => {
    const [file, setFile ] = useState(null);
    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <div>
            <input type="file" onChange={handleChange} />
            <img alt="for upload" src={file} width="400px"/>
        </div>
    );
}