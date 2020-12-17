import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";

class Playlist extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            playlist: [],
            isLogin: false,
        };

        this.state = this.initialState;

    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState(() => ({
                    userId: user.uid
                }));
            } else {
                console.log("User not logged");
            }
        })


        axios.get('http://localhost:5000/playlist/')
            .then(res => {
                const playlist = res.data;
                console.log(playlist);
                this.setState({playlist})
            })
    }

    render() {
        return (
            <div>
                <h2> Discover playlist </h2>
                <p> All playlists publics</p>

                {this.state.playlist.map(playlist =>
                    <ul>
                        <li>{playlist.name}</li>
                    </ul>


                )}
            </div>
        );
    }
}

export default Playlist;