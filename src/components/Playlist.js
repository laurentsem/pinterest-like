import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";
import {Link} from "react-router-dom";

class PlaylistDetails extends Component {
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
                    <div>
                    <h4>{playlist.name}</h4>
                    <p>{playlist.playlistId}</p>
                        <Link to={`playlistDetails/${playlist.playlistId}`}>Détails de la playlist</Link>

                    </div>
                )}

            </div>
        );
    }
}

export default PlaylistDetails;