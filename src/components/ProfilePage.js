// Profile page
// Affiche les informations de l'utilisateur

import React, {Component} from 'react';
import "../assets/css/profile.css"
import "../assets/css/StyleSelect.scss"
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";
import firebase from "firebase";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            isLogin: false,
            getName: '',
            getProfilePic: '',
            getId: '',
            getToken: ''
        };

        this.state = this.initialState;

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

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                this.setState(() => ({
                    isLogin: true,
                    getName: user.displayName,
                    getProfilePic: user.photoURL,
                    getId: user.uid
                }));
            } else {
                console.log("users not logged");
            }
        })
    };

    componentWillUnmount = () => {
        this.setState(() => (this.initialState));
    };

    Logout = () => {
        firebase.auth().signOut().then(() => {
            console.log('Logged out');
            this.setState(() => (this.initialState));
        }).catch(function (err) {
            console.log(err.message)
        })
    };

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

            <img src={this.state.getProfilePic} alt="imgProfile"/>

            <div>
                {this.state.isLogin === false ?
                    <></>
                    :
                    <>
                        <p>UID: {this.state.getId}</p>
                        <p>Name: {this.state.getName}</p>
                        <button onClick={() => this.Logout()}>Logout</button>
                    </>
                }
            </div>
            </html>
        )
    }
}

export default ProfilePage;
