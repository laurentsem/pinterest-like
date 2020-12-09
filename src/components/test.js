import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import {WidgetLoader, Widget} from 'react-cloudinary-upload-widget'
import axios from 'axios';


class test extends Component {
    render() {
        return (
            <div>
                <WidgetLoader/>
                <Widget
                    sources={['local', 'url', 'camera']} // set the sources available for uploading -> by default
                    resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
                    cloudName={'dp2k3zmzy'} // your cloudinary account cloud name.
                    uploadPreset={'preset_unsigned'} // check that an upload preset exists and check mode is signed or unisgned
                    style={{
                        color: 'white',
                        border: 'none',
                        width: '120px',
                        backgroundColor: 'green',
                        borderRadius: '4px',
                        height: '25px'
                    }} // inline styling only or style id='cloudinary_upload_button'
                    logging={false} // logs will be provided for success and failure messages,
                />
            </div>
        )
    };
}

export default test;
