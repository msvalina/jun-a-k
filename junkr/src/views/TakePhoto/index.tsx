import { Col, Divider, Row } from 'antd';
import * as React from 'react';
// @ts-ignore
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


class TakePhoto extends React.Component{
    // @ts-ignore
    public onTakePhoto (dataUri) {
        // @ts-ignore
        // console.log("photo taken")
        // // @ts-ignore
        // console.log(dataUri)
    }
    public render() {
        return (
            <Row>
                <Col span={12} offset={6}>
                <Divider>Take Photo</Divider>
                    <div className="photoApp">
                        <Camera
                        // @ts-ignore
                            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } } 
                        />
                    </div>

                </Col>
            </Row>
        );
    }
}

export default TakePhoto;