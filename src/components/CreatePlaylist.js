// New Post
// Formulaire pour poster une image

import React, { Component } from 'react';
import firebase from 'firebase/app';
import axios from 'axios';
const db = firebase.firestore();

class CreatePlaylist extends Component {

    state = {
        userId: '',
        title: ''
    };

    titleOnChange = e => {
        this.setState({
            title: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            title : this.state.title,
            creatorId: this.state.userId,
            posts: []
        };
            axios.post("http://localhost:5000/playlist", data)
                .then(res =>
                    console.log(res))
                .catch(err =>
                    console.log(err))
    };


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
                <h2>Create a new Playlist for your favorite Posts</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder="Nom"
                           onChange={this.titleOnChange}
                           required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePlaylist;
