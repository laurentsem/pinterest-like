// Page Home
// Afficher les derniers posts des utilisateurs

import React, { Component } from 'react';
import axios from 'axios';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import "../assets/css/homeImage.scss";
import "../assets/css/StyleSelect.scss";
import firebase from "firebase";
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            posts: [],
            getId: '',
            playlists: [],
            tags: [],
            tagPost: [],
            userDetails: []
        };

        this.state = this.initialState
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                this.setState({
                    getId: user.uid,
                    userDetails: user
                })
            } else {
                console.log("users not logged");
            }
        })
        axios.get('http://localhost:5000/posts')
            .then(res => {
                const posts = res.data;
                console.log(posts)
                this.setState({posts})
            })
        axios.get('http://localhost:5000/tags')
            .then(res => {
                const tags = res.data;
                this.setState({tags})
            });
    }

    DeletePost = (id) => {
        axios.delete(`http://localhost:5000/posts/${id}`)
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

    render() {
        return (
        <div>
            <div className="allbody">
                <h2> Bienvenue {this.state.userDetails.displayName} !</h2>
                <h3> Publications les plus récentes </h3>
                {this.state.posts.map(post =>
                <div className="child-page-listing">
                        <article className="location-listing">
                            <div className="location-image">
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                                <div className="box">
                                                    <Link to={`posts/${post.docId}`}><Image publicId={post.imageURL} ><Transformation gravity="east" crop="fill" /></Image></Link>
                                                    <ul>
                                                        <li id="li">{post.title}</li>
                                                        <li id="li"><Link to={`tag/${post.tag}`}>#{post.tag}</Link></li>
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
            <h3> Parcourir par tags</h3>
                <select id="selectTag" onChange={this.selectOnChange}>
                    <option disabled='disabled' selected='selected' value='' >Choisissez votre tag</option>
                    {this.state.tags.map(e =>
                        <option value={`http://localhost:3000/tag/${e}`}>{e}</option>
                    )}
                </select>
            </div>

        </div>
        )
    }
}

export default Home;
