// Profile page
// Affiche les informations de l'utilisateur

import React, {Component} from 'react';
import "../assets/css/profile.css"
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";
import Signup from "./Signup";
class ProfilePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Un essai a été envoyé : ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <html id="profile">
            <div>
                <h2>Profile Page</h2>
            </div>
            <CloudinaryContext cloudName="dp2k3zmzy">
                <div className="container gal-container profile">
                    <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                        <div className="box">
                            <Image publicId="test"><Transformation gravity="face" radius="max" crop="crop"/></Image>
                        </div>
                    </div>
                </div>
            </CloudinaryContext>
            <Signup/>
            </html>
        )
    }
}

export default ProfilePage;
