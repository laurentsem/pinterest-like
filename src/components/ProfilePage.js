// Profile page
// Affiche les informations de l'utilisateur

import React, {Component} from 'react';
import "../assets/css/profile.css"
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";

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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input  type="text" placeholder="Nom" color="black" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>


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
            <div class="info">
                <span onChange={this.handleChange} >Pseudo:{this.state.value}</span>
            </div>
            </html>
        )
    }
}

export default ProfilePage;
