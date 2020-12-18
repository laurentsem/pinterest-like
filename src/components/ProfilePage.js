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

    getNameChange = e => {
        this.setState({
            getName: e.target.value
        });
    };

    getProfileChange = e => {
        this.setState({
            getProfilePic: e.target.value
        });
    };

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

    submitUpProfile = (event) => {
        event.preventDefault();
        let user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: this.state.getName,
            photoURL: this.state.getProfilePic
        }).then(function() {
            console.log('yes !')
        }).catch(function(error) {
            console.log(error)
        });
    };

    render() {
        let user = firebase.auth().currentUser;
        return (
            <html id="profile">
            <div>
                <h2>Profile Page</h2>
            </div>
            {this.state.getProfilePic === '' ?
                <></>
                :
                <>
                    <img class="profile_image" src={user.photoURL} alt="imgProfile"/>
                </>
            }

            <div>
                {this.state.isLogin === false ?
                    <></>
                    :
                    <>
                        <form onSubmit={this.submitUpProfile}>
                            <input type="text"
                                   placeholder="Créer/Modifier son nom"
                                   onChange={this.getNameChange}
                            />
                            <input type="url"
                                   placeholder="Ajouter/Modifier ça photo de profile"
                                   onChange={this.getProfileChange}
                            />
                            <button type="submit">Submit</button>
                        </form>
                        <p>NAME: {user.displayName}</p>
                        <button onClick={() => this.Logout()}>Logout</button>
                    </>
                }
            </div>
            </html>
        )
    }
}

export default ProfilePage;
