// Page Home
// Afficher les derniers posts des utilisateurs

import React, { Component } from 'react';
import axios from 'axios';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import "../assets/css/homeImage.scss";
import firebase from "firebase";

class Home extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            posts: [],
            getId: '',
            playlists: []
        }

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
    }

    DeletePost = (id) => {
        axios.delete(`http://localhost:5000/posts/${id}`)
            .then(res => {
                console.log(res)
            })
    }

    ChoosePlaylist =  (id) => {
        axios.get('http://localh')
    }

    render() {
        return (
        <div>
            <div className="allbody">
                <h2> Recents posts </h2>
                {this.state.posts.map(post =>
                <div className="child-page-listing">
                    <div className="grid-container">
                        <article className="location-listing">
                            <div className="location-image">
                                {/* <Link to={/Onepost/${postId}}></Link> */}
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId={post.imageURL} ><Transformation gravity="east" crop="fill" /></Image>
                                                    <ul>
                                                    <li>{post.title}</li>
                                                    <li>{post.tag}</li>
                                                    <li>{post.docId}</li>
                                                        <select>

                                                        </select>
                                                        <button>Ajouter à la playlist</button>

                                                    <li>{this.state.getId === post.userId ?
                                                        <><button onClick={() => this.DeletePost(post.docId)}>Delete post</button></>
                                                        :
                                                        <>
                                                        </>
                                                    }</li></ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CloudinaryContext>
                            </div>
                        </article>
                    </div>
                </div>
            )}
            </div>

        </div>
        )
    }
}

export default Home;
