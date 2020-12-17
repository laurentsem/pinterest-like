import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";

class Playlist extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            playlist: [],
            posts: []
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

        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://localhost:5000/playlist/${id}`)
            .then(res => {
                const playlist = res.data;
                this.setState({playlist})
            })
    }

    postItem = (table) => {
       table.map(e => this.state.posts.push(e))
    }

    render() {
        return (
            <div>
                <div>
                {this.state.playlist.map(e =>
                    <div>
                        {console.log("All post from playlist:" + e.posts)}
                        {this.postItem(e.posts)}
                    <h2>{e.name}</h2>
                        {this.state.posts.map(e =>
                            <CloudinaryContext cloudName="dp2k3zmzy">
                                <Image publicId={e} ><Transformation gravity="east" crop="fill" /></Image>
                            </CloudinaryContext>
                        )}

                    </div>
                )}
            </div>
            </div>
        );
    }
}

export default Playlist;