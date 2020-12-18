// Page Home
// Afficher les derniers posts des utilisateurs

import React, { Component } from 'react';
import axios from 'axios';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import "../assets/css/homeImage.scss";
import "../assets/css/StyleSelect.scss";
import firebase from "firebase";

class Home extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            posts: [],
            getId: '',
            playlists: [],
            tags: [],
            tagPost: []
        };

        this.state = this.initialState
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                this.setState({
                    getId: user.uid
                })
            } else {
                console.log("users not logged");
            }
        })
        axios.get('http://localhost:5000/posts')
            .then(res => {
                const posts = res.data;
                this.setState({posts})
            })
        axios.get('http://localhost:5000/tags')
            .then(res => {
                const tags = res.data;
                this.setState({tags})
            });
    }

    DeletePost = (id) => {
        axios.delete(`http://localhost:5000/delPost/${id}`)
            .then(res => {
                console.log(res)
            })
    };

    selectOnChange = () => {
        const URL = document.getElementById("selectTag").value;
        console.log("Url : " + URL);
        if ( URL !== '' ) {
            window.location = URL;
        }
    };

    ChoosePlaylist =  (id) => {
        axios.get('http://localh')
    }

    render() {
        return (
        <div>
            <select id="selectTag" onChange={this.selectOnChange}>
                <option disabled='disabled' selected='selected' value='' >Choisissez votre tag</option>
                {this.state.tags.map(e =>
                    <option value={`http://localhost:3000/tag/${e}`}>{e}</option>
                )}
            </select>
            <div className="allbody">
                <h2> Recents posts </h2>
                {this.state.posts.map(post =>
                <div className="child-page-listing">
                        <article className="location-listing">
                            <div className="location-image">
                                {/*<Link to={/Onepost/${postId}}/>*/}
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                                <div className="box">
                                                    <Image publicId={post.imageURL} ><Transformation gravity="east" crop="fill" /></Image>
                                                    <ul>
                                                    <li id="li">{post.title}</li>
                                                    <li id="li">{post.tag}</li>
                                                    {this.state.getId === post.userId ?
                                                        <><button onClick={() => this.DeletePost(post.docId)}>Delete post</button></>
                                                        :
                                                        <>
                                                        </>
                                                    }</ul>
                                                </div>
                                    </CloudinaryContext>
                            </div>
                        </article>
                    </div>
            )}
            </div>

        </div>
        )
    }
}

export default Home;
