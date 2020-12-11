// Page Home
// Afficher les derniers posts des utilisateurs

import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import "../assets/css/homeImage.scss"
import "../assets/jsCSS/jsCSS"


class Home extends Component {
    render() {
        return (
            /*<div>
                <header className="App-header">
                    <h1>Pinterest</h1>
                    <span>create'n share</span>

                    <div class="imageHome">
                        <div class="allImage" className="gallery" id="gallery">
                            <CloudinaryContext cloudName="dp2k3zmzy">

                                    <div className="container gal-container">
                                        <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                            <div className="box">
                                                <Image publicId="coding_groupe_siwt8c"><Transformation aspectRatio="4:3"
                                                                                                       crop="fill"
                                                                                                       width="400"
                                                                                                       height="400"/></Image>
                                            </div>
                                        </div>

                                        <div className="container gal-container">
                                            <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                                                <div className="box">
                                                    <Image publicId="sample"><Transformation aspectRatio="4:3"
                                                                                             crop="fill"
                                                                                             width="400"
                                                                                             height="400"/></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </CloudinaryContext>
                        </div>
                    </div>
                </header>
            </div>*/
            <div>
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
