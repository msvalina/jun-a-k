import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class ReportCamera extends React.Component{
    onTakePhoto (dataUri) {
        console.log("photo taken")
        console.log(dataUri)
    }
    render() {
        return (
            <Row>
                <Col md={6}>
                    <div className="photoApp">
                        <Camera onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } } />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ReportCamera;