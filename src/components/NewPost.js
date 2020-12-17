// New Post
// Formulaire pour poster une image

import React, { Component } from 'react';
import firebase from 'firebase/app';
import axios from 'axios';
import FormData from 'form-data'
const db = firebase.firestore();

class NewPost extends Component {

    state = {
        title: '',
        description: '',
        tag: '',
        imageURL: '',
        imageFile: '',
        userId: '',
        date: ''
    };

    titleOnChange = e => {
        this.setState({
            title: e.target.value
        })
    };

    descriptionOnChange = e => {
        this.setState({
            description: e.target.value
        })
    };

    tagOnChange = e => {
        this.setState({
            tag: e.target.value
        })
    };

    imageURLOnChange = e => {
        this.setState({
            imageURL: e.target.value
        })
    };

    uploadImageOnChange = e => {
        this.setState({
            imageFile: e.target.files[0]
        })
    };


    handleSubmit = e => {
        e.preventDefault();

        const uploadData = new FormData();
        uploadData.append('title', this.state.title);
        uploadData.append('description', this.state.description);
        uploadData.append('tag', this.state.tag);
        uploadData.append('image', this.state.imageFile);
        uploadData.append('userId', this.state.userId);
        uploadData.append('date', this.state.date);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        const fromURLData = {
            title : this.state.title,
            description: this.state.description,
            tag: this.state.tag,
            imageURL: this.state.imageURL,
            userId: this.state.userId,
            date: this.state.date
        };

        if(this.state.imageURL === '') {
            axios.post("http://localhost:5000/posts", uploadData, config)
                .then(res =>
                    console.log(res))
                .catch(err =>
                    console.log(err))
        } else if (this.state.imageFile === '') {
            axios.post("http://localhost:5000/posts", fromURLData)
                .then(res =>
                    console.log(res))
                .catch(err =>
                    console.log(err))
        }
    };

    onSelectChange = () => {
        const selectedValue = document.getElementById("profilePictureType").value;
        selectedValue === "1" ? this.upload() : this.link();
    };

    upload() {
        document.getElementById("enterUrl").disabled = true;
        document.getElementById("cloudinary").disabled = false;
        document.getElementById("enterUrl").required = false;
        document.getElementById("cloudinary").required = true;

    }

    link() {
        document.getElementById("cloudinary").disabled = true;
        document.getElementById("enterUrl").disabled = false;
        document.getElementById("cloudinary").required = false;
        document.getElementById("enterUrl").required = true;
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState(() => ({
                    userId: user.uid
                }));
            } else {
                console.log("users not logged");
            }
        })
    };

     render() {
        return (
        <div>
            <h2>Create new Post</h2>
            <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="Nom"
                       onChange={this.titleOnChange}
                required />
                <input type="text"
                       placeholder="Description"
                       onChange={this.descriptionOnChange}
               required />
                <input type="text"
                       placeholder="Tag"
                       onChange={this.tagOnChange}
               required />

                <p> Upload image from : </p>
                <select id="profilePictureType" onChange={this.onSelectChange}>

                    <option value="1">Load from Computer</option>
                    <option value="2">Load from URL</option>

                </select>

                <input type="file"
                       id="cloudinary" name="image"
                       onChange={this.uploadImageOnChange}
                       required="required"
                />

                <input type="url"
                       id="enterUrl"
                       placeholder="Lien URL de la photo"
                       onChange={this.imageURLOnChange}
                       disabled="disabled"
                />

                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default NewPost;
