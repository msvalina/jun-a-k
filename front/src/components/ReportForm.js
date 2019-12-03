import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const FormStyle = styled.div`
  .text-muted {
    color: #d8dee4 !important;
  }

  .label {
    font-size: 1.25rem;
  }

  .centering {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 320px) {
    /* smartphones, iPhone, portrait 480x320 phones */
    .forms {
      width: 95vw;
    }
    .form-textarea {
      height: 115px;
    }
  }
  @media (min-width: 481px) {
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
    .forms {
      width: 95vw;
    }
    .form-textarea {
      height: 115px;
    }
  }
  @media (min-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    .forms {
      width: 475px;
    }
    .form-textarea {
      height: 125px;
    }
  }
  @media (min-width: 961px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
  }
  @media (min-width: 1025px) {
    /* big landscape tablets, laptops, and desktops */
  }
  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
  }
`;

export const ReportForm = () => (
  <FormStyle>
    <Form className="centering ">
      <Form.Group className="forms" controlId="formDescription">
        <Form.Label className="label">Send us Photo</Form.Label>
        <br />
        <Upload />
        <br />
        <Form.Label className="label">Or </Form.Label>
        <LinkContainer to="/photo">
          <div className="centering">
            <FontAwesomeIcon icon={faCamera} className="fa-3x" />
            <Button size="lg" variant="light" type="">
              Take a Picture
            </Button>
          </div>
        </LinkContainer>
        <br />
        <Form.Label className="label">
          Anything you want to say about it?
        </Form.Label>
        <Form.Control size="lg" as="textarea" className="form-textarea" placeholder="Enter description" />
        <Form.Text className="text-muted">
          We'll read your message. Thank you for writing.
        </Form.Text>
        <br />
        <Form.Label className="label">Tell us location</Form.Label>
        <Form.Control size="lg" as="input" placeholder="Enter Location" />
        <Form.Text className="text-muted">
          Or give permission so we can use or gps location.
        </Form.Text>
        <br />
        <Form.Label className="label">Report and be Junak</Form.Label>
      </Form.Group>
      <Button size="lg" variant="light" type="">
        Send
      </Button>
    </Form>
  </FormStyle>
);

const BrowseStyle = styled.div`
  input[type="file"] {
    display: none;
  }
`;

export const Upload = () => {
  const [file, setFile] = useState(null);
  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  let upload;

  if (file) {
    upload = <img alt="for upload" src={file} width="300px" />;
  } else {
    upload = (
      <div className="centering">
        <FontAwesomeIcon icon={faCloudUploadAlt} className="fa-3x" />
        <label for="file-upload" class="btn btn-light btn-lg ">
          <div>Upload Image</div>
        </label>
        <input id="file-upload" type="file" onChange={handleChange} />
      </div>
    );
  }

  return <BrowseStyle>{upload}</BrowseStyle>;
};
