// Page Home
// Afficher les derniers posts des utilisateurs

import React, { Component } from 'react';
import axios from 'axios';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import "../assets/css/homeImage.scss"
import "../assets/jsCSS/jsCSS"


class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                const posts = res.data;
                console.log(posts)
                this.setState({posts})
            })
    }
    render() {
        return (
        <div>
            <ul>
                {this.state.posts.map(post => <li>{post.description}</li>)}
            </ul>
                <div className="child-page-listing">
                    <div className="grid-container">
                        <article className="location-listing">
                            <div className="location-image">
                                <a href="#">
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId="coding_groupe_siwt8c"><Transformation gravity="east" crop="fill" width="400" height="400" /></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </CloudinaryContext>
                                </a>
                            </div>
                        </article>
                        <article className="location-listing">
                            <div className="location-image">
                                <a href="#">
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId="sample"><Transformation gravity="east" crop="fill" width="400" height="400" /></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </CloudinaryContext>
                                </a>
                            </div>
                        </article>                        <article className="location-listing">
                            <div className="location-image">
                                <a href="#">
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId="coding_groupe_siwt8c"><Transformation gravity="east" crop="fill" width="400" height="400" /></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </CloudinaryContext>
                                </a>
                            </div>
                        </article>
                        <article className="location-listing">
                            <div className="location-image">
                                <a href="#">
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId="sample"><Transformation gravity="east" crop="fill" width="400" height="400" /></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </CloudinaryContext>
                                </a>
                            </div>
                        </article>                        <article className="location-listing">
                            <div className="location-image">
                                <a href="#">
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId="coding_groupe_siwt8c"><Transformation gravity="east" crop="fill" width="400" height="400" /></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </CloudinaryContext>
                                </a>
                            </div>
                        </article>
                        <article className="location-listing">
                            <div className="location-image">
                                <a href="#">
                                    <CloudinaryContext cloudName="dp2k3zmzy">
                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId="sample"><Transformation gravity="east" crop="fill" width="400" height="400" /></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </CloudinaryContext>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
