import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = styled.div`

.demo-image-preview {
  position: relative;
  text-align: center;
}

.demo-image-preview > img {
  width: 768px;
}

@media(max-width:768px){
  .demo-image-preview > img {
    width: 100%;
  }
}

/* fullscreen enable by props */
.demo-image-preview-fullscreen > img {
  width: 100vw;
  height:100vh;
}
`


export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';

  return (
    <Styles>
    <div className={'demo-image-preview ' + classNameFullscreen}>
      <img src={dataUri} alt="preview" />
    </div>
    </Styles>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;