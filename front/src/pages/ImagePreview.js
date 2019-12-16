import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .demo-image-preview {
    position: relative;
    text-align: center;
  }

  .demo-image-preview > img {
    width: 768px;
  }

  @media (max-width: 768px) {
    .demo-image-preview > img {
      width: 100%;
    }
  }

  /* fullscreen enable by props */
  .demo-image-preview-fullscreen > img {
    width: 100vw;
    height: 100vh;
  }

  .space-between-positions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .flex-item {
    display: flex;
  }
`;

export const ImagePreview = ({ dataUri, onRetry, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <Styles>
      <div className={"demo-image-preview " + classNameFullscreen}>
        <img src={dataUri} alt="preview" />
      </div>
      <div className="space-between-positions">
        <LinkContainer
          className="flex-item"
          to={{
            pathname: "/",
            state: {
              cameraPhoto: dataUri
            }
          }}
        >
          <Button size="lg" variant="light" type="">
            Use Picture
          </Button>
        </LinkContainer>

        <LinkContainer className="flex-item" to="/photo">
          <Button size="lg" variant="light" type="" onClick={onRetry}>
            Retry
          </Button>
        </LinkContainer>
      </div>
    </Styles>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;
