// New Post
// Formulaire pour poster une image

import React, { Component } from 'react';
import { Widget, WidgetLoader } from "react-cloudinary-upload-widget";
import firebase from 'firebase/app';
import { getData } from '../server/functions';
const db = firebase.firestore();


class NewPost extends Component {
     render() {
        return (
        <div>
            <h2>Create new Post</h2>
            <form>
                <input type="text" placeholder="Nom"></input>
                <input type="text" placeholder="Description"></input>
                <input type="text" placeholder="Lien URL de la photo"></input>
                <button type="submit">Submit</button>
            </form>

            <h2>Test data</h2>
            <button type="button" onClick={() => getData}>Get all data in console</button>

            <WidgetLoader/>
                <Widget
                    sources={['local', 'url', 'image_search', 'camera']} // set the sources available for uploading -> by default
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

export default NewPost;