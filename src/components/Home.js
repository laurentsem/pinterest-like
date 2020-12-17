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
            getId: ''
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
        axios.delete(`http://localhost:5000/delPost/${id})`)
            .then(res => {
                console.log("Delete post")
            })
    }

    render() {
        return (
        <div>
            <ul>
            </ul>
            <div className="allbody">
                {this.state.posts.map(post =>
                <div className="child-page-listing">
                    <div className="grid-container">
                        <article className="location-listing">
                            <div className="location-image">
                                {/*<Link to={/Onepost/${postId}}/>*/}
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId={post.imageURL} ><Transformation gravity="east" crop="fill" /></Image>
                                                    <li>{post.title}</li>
                                                    {this.state.getId === post.userId ?
                                                        <><button onClick={() => this.DeletePost(post.docId)}>Delete post</button></>
                                                        :
                                                        <>
                                                        </>
                                                    }
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
