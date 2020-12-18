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
                    isLogin: true,
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

    DeletePlaylist = (id) => {
        axios.delete(`http://localhost:5000/playlist/${id}`)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return (
            <div>
                <h2> My playlist </h2>

                {this.state.playlist.map(playlist =>
                    <div>
                    <h3>{playlist.name}</h3>
                    <p>{playlist.playlistId}</p>
                        <Link to={`playlistDetails/${playlist.playlistId}`}>Détails de la playlist</Link>
                        <br/>
                        <button onClick={() => this.DeletePlaylist(playlist.playlistId)}> Supprimer la playlist </button>
                    </div>
                )}

            </div>
        );
    }
}

export default PlaylistDetails;