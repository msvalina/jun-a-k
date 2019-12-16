import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const BrowseStyle = styled.div`
  .centering {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type="file"] {
    display: none;
  }
`;

export const UploadButton = props => {
  const [file, setFile] = useState(null);
  const handleChange = event => {
    let tmpFile = event.target.files[0];
    setFile(URL.createObjectURL(tmpFile));
    let reader = new FileReader();
    reader.readAsDataURL(tmpFile);
    reader.onload = () => {
      let fileInfo = {
        name: tmpFile.name,
        type: tmpFile.type,
        size: Math.round(tmpFile.size / 1000) + " kB",
        base64: reader.result,
        file: tmpFile
      };
      props.onDone(fileInfo);
    };
  };
  let upload;

  if (file) {
    upload = <img alt="for upload" src={file} width="300px" />;
  } else {
    upload = (
      <div className="centering">
        <FontAwesomeIcon icon={faCloudUploadAlt} className="fa-3x" />
        <label htmlFor="file-upload" className="btn btn-light btn-lg ">
          <div>{props.label}</div>
        </label>
        <input id="file-upload" type="file" accept="image/webp, image/*" capture="environment" onChange={handleChange} />
      </div>
    );
  }

  return <BrowseStyle>{upload}</BrowseStyle>;
};
