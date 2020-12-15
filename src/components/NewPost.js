// New Post
// Formulaire pour poster une image

import React, { Component } from 'react';
import firebase from 'firebase/app';
import axios from 'axios';
const db = firebase.firestore();


class NewPost extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    state = {
        title: '',
        description: '',
        imageURL: '',
        selectedImage: ''
    }

    titleOnChange = e => {
        this.setState({
            title: e.target.value
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

    uploadImageOnChange = e => {
        console.log(e.target.files[0])
        this.setState({
            selectedImage: e.target.value
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
            .then(res =>
                console.log(res))
            .catch(err =>
                console.log(err))
    }

    onSelectChange = () => {
        const selectedValue = document.getElementById("profilePictureType").value;
        selectedValue === "1" ? this.upload() : this.link();
    }

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


     render() {
        return (
        <div>
            <h2>Create new Post</h2>
            <form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="Nom"
                       onChange={this.titleOnChange}
                required />
                <input type="text"
                       placeholder="Description"
                       onChange={this.descriptionOnChange}
               required />

                <p> Upload image from : </p>
                <select id="profilePictureType" onChange={this.onSelectChange} >

                    <option value="1">Load from Computer</option>
                    <option value="2">Load from URL</option>

                </select>


                <input type="file"
                       id="cloudinary" name="image"
                       onChange={this.uploadImageOnChange}
                       ref={this.fileInput}
                       required="required"
                />
                <input type="url"
                       placeholder="Lien URL de la photo" id="enterUrl" disabled="disabled"
                       onChange={this.imageURLOnChange}
                />

                <img src={this.state.imageURL}/>

                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default NewPost;
