import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { CREATE_REPORT } from "../containers/CreateReport";
import { UploadButton as Upload } from "./UploadButton";
import Geolocation from "react-geolocation";

export default function ReportForm(props) {
  const [location, setLocation] = useState("");
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(props.cameraPhoto);
  const [redirect, setRedirect] = useState(false);

  //const [createReport, { data }] = useMutation(CREATE_REPORT, {
  const [createReport] = useMutation(CREATE_REPORT, {
    variables: {
      location,
      lon,
      lat,
      image,
      description,
      status
    }
  });

  const handleSubmit = event => {
    event.preventDefault();
    createReport({
      variables: {
        location,
        lon,
        lat,
        image,
        description,
        status: "CONFIRMED"
      }
    });

    setRedirect(true);
  };

  let cameraPhotoView;
  if (props.cameraPhoto) {
    cameraPhotoView = (
      <div>
        <br />
        <img src={props.cameraPhoto} alt="preview" width="300px" />
      </div>
    );
  } else {
    cameraPhotoView = (
      <LinkContainer to="/photo">
        <div className="centering">
          <FontAwesomeIcon icon={faCamera} className="fa-3x" />
          <Button size="lg" variant="light" type="">
            Take a Picture
          </Button>
        </div>
      </LinkContainer>
    );
  }
  if (redirect) {
    return <Redirect to="/reports" />;
  }

  return (
    <FormStyle>
      <Form className="centering " onSubmit={handleSubmit}>
        <Form.Group className="forms" controlId="formDescription">
          <Form.Label className="label">Send us photo</Form.Label>
          <br />
          <Upload
            label="Upload Image"
            onDone={fileInfo => setImage(fileInfo.base64)}
          />
          <br />
          <Form.Label className="label">Or </Form.Label>
          {cameraPhotoView}
          <br />
          <br />
          <Form.Control
            size="lg"
            as="textarea"
            className="form-textarea"
            placeholder="Anything you want to say about it?"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <Form.Text className="text-muted">
            We'll read your message. Thank you for writing.
          </Form.Text>
          <br />
          <br />
          <Form.Control
            size="lg"
            as="input"
            placeholder="Tell us location"
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          />
          <Form.Text className="text-muted">
            Or give permission so we can use gps location.
          </Form.Text>
          <br />
          <br />
          <Geolocation
            lazy
            onSuccess={position => {
              setLat(position.coords.latitude);
              setLon(position.coords.longitude);
            }}
            render={({
              fetchingPosition,
              position: { coords: { latitude, longitude } = {} } = {},
              error,
              getCurrentPosition
            }) => (
              <div>
                <Form.Label className="label">Click here to send us</Form.Label>
                <br />
                <div className="centering">
                  <Button
                    size="lg"
                    variant="light"
                    onClick={getCurrentPosition}
                  >
                    GPS Coordinations
                  </Button>
                </div>
                {error && <div>{error.message}</div>}
                {latitude && longitude && lon && lat && (
                  <Form.Text className="text-muted">
                    Coordinations saved: latitude: {latitude} longitude:{" "}
                    {longitude}
                  </Form.Text>
                )}
              </div>
            )}
          />
          <br />
          <br />
        </Form.Group>
        <Button size="lg" variant="light" type="submit">
          Send
        </Button>
      </Form>
    </FormStyle>
  );
}

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
