// Login w/Google
// Page de connexion

import React, { Component } from 'react';
import firebase from '../server/firebase';
import { googleProvider } from "../server/firebase";

class LoginWithGoogle extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            isLogin: false,
            name: '',
            profilePic: '',
        }

        this.state = this.initialState;
    }

    onSubmit = () => {
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
        }).catch(function(err) {
            console.log(err.message);
        })
    }

    Logout = () => {
        firebase.auth().signOut().then(() => {
            console.log('Logged out');
            this.setState(() => (this.initialState));
        }).catch(function(err) {
            console.log(err.message)
        })
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                this.setState(() => ({ 
                    isLogin: true,
                    name: user.displayName,
                    profilePic: user.photoURL
                })); 
            } else {
                console.log("User not logged");
            }
        })
    }

    componentWillUnmount = () => {
        this.setState(() => (this.initialState));
    }
 
    render() {
        return (
            <div>
            <h2>LoginWithGoogle</h2>

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