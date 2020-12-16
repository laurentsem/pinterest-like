// Page Home
// Afficher les derniers posts des utilisateurs

import React, { Component } from 'react';
import axios from 'axios';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import "../assets/css/homeImage.scss"


class Home extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                const posts = res.data;
                console.log(posts);
                this.setState({posts})
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
                                <Link to={/Onepost/${postId}}></Link>
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId={post.imageURL} ><Transformation gravity="east" crop="fill" /></Image>
                                                    <li>{post.title}</li>
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
