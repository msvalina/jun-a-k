import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

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
`;

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <Styles>
      <div className={"demo-image-preview " + classNameFullscreen}>
        <img src={dataUri} alt="preview" />
      </div>
      <LinkContainer to={{
        pathname: "/",
        state: {
          cameraPhoto: dataUri
        }
      }}>
        <Button size="lg" variant="light" type="">
          Use Picture
        </Button>
      </LinkContainer>

      <LinkContainer to="/photo">
        <div className="centering">
          <FontAwesomeIcon icon={faCamera} className="fa-3x" />
          <Button size="lg" variant="light" type="">
            Take a Picture
          </Button>
        </div>
      </LinkContainer>
    </Styles>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;
