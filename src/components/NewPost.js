// New Post
// Formulaire pour poster une image

import React, { Component } from 'react';
import { Widget, WidgetLoader } from "react-cloudinary-upload-widget";
import firebase from 'firebase/app';
import { getData } from '../server/functions';
import axios from 'axios';
const db = firebase.firestore();


class NewPost extends Component {

    state = {
        title: '',
        description: '',
        imageURL: ''
    }

    titleOnChange = e => {
        this.setState({
            title: e.target.value,
            description: e.target.value,
            imageURL: e.target.value
        })
    }

    descriptionOnChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    imageURLOnChange = e => {
        this.setState({
            imageURL: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault();

        const data = {
            title : this.state.title,
            description: this.state.description,
            imageURL: this.state.imageURL
        };
        axios.post("http://localhost:5000/posts", data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

     render() {
        return (
        <div>
            <h2>Create new Post</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="Nom" value={this.state.title}
                       onChange={this.titleOnChange}
                />
                <input type="text"
                       placeholder="Description" value={this.state.description}
                       onChange={this.descriptionOnChange}
                />
                <input type="text"
                       placeholder="Lien URL de la photo" value={this.state.imageURL}
                       onChange={this.imageURLOnChange}
                />
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
