import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
import Camera, {FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class ReportCamera extends React.Component{
    constructor (props, context) {
        super(props, context);
        this.state = { dataUri: null };
        this.onTakePhotoAnimationDone = this.onTakePhotoAnimationDone.bind(this);
    }
    onTakePhotoAnimationDone (dataUri) {
        console.log("Photo taken")
        console.log(dataUri.slice(-20))
        this.setState({ dataUri });
    }
    onCameraStop() {
        console.log("On camera stop")
    }

    render() {
        return (
            <Row>
                <Col md={6}>
                    <div className="photoApp">
                        {
                            (this.state.dataUri)
                            ? <ImagePreview dataUri={this.state.dataUri} />
                            : <Camera
                                onTakePhotoAnimationDone = {this.onTakePhotoAnimationDone}
                                isImageMirror = {false}
                                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                                idealResolution = {{width: 640, height: 480}}
                                onCameraStop = { () => { this.onCameraStop(); } }
                              />
                        }
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ReportCamera;
