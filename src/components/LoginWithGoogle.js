// Login w/Google
// Page de connexion

import React, { Component } from 'react';
import firebase from '../server/firebase';

class LoginWithGoogle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            name: "",
            profilePic: ""
        }
    }

    onSubmit = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
        }).catch(function(err) {
            console.log(err.message);
        })
    }

    Logout = () => {
        firebase.auth().signOut().then(function() {
           console.log('Logged out')
        }).catch(function(err) {
            console.log(err.message)
        })
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("User logged");
                console.log(user.displayName)
                this.setState = ({
                    isLogin: true,
                    name: user.displayName,
                    profilePic: user.photoURL
                })
            } else {
                console.log("User not logged");
            }
        })
    }
    
    render() {
        return (
            <div>
            <h2>LoginWithGoogle</h2>
        <p>Status : {this.state.isLogin}</p>
        <p>Name: {this.state.name}</p>
        <button onClick={() => this.Logout()}>Logout</button>
            {this.state.isLogin === false ? 
             <button onClick={() => this.onSubmit()}>Login with Google</button>
             :
             <>
             <p>Name : {this.state.name}</p>
            <button onClick={() => this.Logout()}>Logout</button>
             </>    
        }
        </div>    
        )
    }
}

export default LoginWithGoogle;