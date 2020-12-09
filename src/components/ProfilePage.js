// Profile page
// Affiche les informations de l'utilisateur

import React, {Component} from 'react';
import "../assets/css/profile.css"
import {Widget, WidgetLoader} from "react-cloudinary-upload-widget";

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <h2>Profile Page</h2>
                <input type="text" placeholder="Nom"/>
                <WidgetLoader/>
                <Widget
                    sources={['local', 'url', 'camera']} // set the sources available for uploading -> by default
                    resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
                    cloudName={'dp2k3zmzy'} // your cloudinary account cloud name.
                    uploadPreset={'preset_unsigned'} // check that an upload preset exists and check mode is signed or unisgned
                    style={{
                        color: 'white',
                        border: 'none',
                        width: '100px',
                        backgroundColor: 'green',
                        borderRadius: '4px',
                        height: '50px'
                    }} // inline styling only or style id='cloudinary_upload_button'
                    logging={false} // logs will be provided for success and failure messages,
                />
            </div>
        )
    }
}

export default ProfilePage;
