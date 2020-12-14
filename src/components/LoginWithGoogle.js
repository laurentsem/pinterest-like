// Login w/Google
// Page de connexion

import React, {Component} from 'react';
import firebase from '../server/firebase';
import {googleProvider} from "../server/firebase";

class LoginWithGoogle extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            isLogin: false,
            getName: '',
            getProfilePic: '',
            getId: '',
            getToken: ''
        }

        this.state = this.initialState;
    }

    onSubmit = () => {
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
        }).catch(function (err) {
            console.log(err.message);
        })
    }

    Logout = () => {
        firebase.auth().signOut().then(() => {
            console.log('Logged out');
            this.setState(() => (this.initialState));
        }).catch(function (err) {
            console.log(err.message)
        })
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user)
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
    }

    componentWillUnmount = () => {
        this.setState(() => (this.initialState));
    }

    render() {
        return (
            <div>
                <br/>
                {this.state.isLogin === false ?
                    <button onClick={() => this.onSubmit()}>Login with Google</button>
                    :
                    <>
                        <p>Name : {this.state.getName}</p>
                        <p>UID : {this.state.getId}</p>
                        <button onClick={() => this.Logout()}>Logout</button>
                    </>
                }
            </div>
        )
    }
}

export default LoginWithGoogle;
