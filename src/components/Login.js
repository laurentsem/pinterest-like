// Login
// Page de connexion
import "../assets/css/login.css"

import React, {Component} from 'react';
import LoginWithGoogle from "./LoginWithGoogle";
import firebase, {googleProvider} from "../server/firebase";

class Login extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            isLogin: false,
            getName: '',
            getProfilePic: '',
            getId: ''
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
                console.log("User not logged");
            }
        })
    }

    componentWillUnmount = () => {
        this.setState(() => (this.initialState));
    }
    render() {
        return (
            <div class="login-box">
                <h2>Connectez-vous !</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" placeholder=" Pseudo"/>
                        <input type="password" name="" required="" placeholder=" Mot de passe"/>
                        <a href="#">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <button class="hidbutton" id="hidbutton" type="button">Se connecter</button>
                            Se connecter
                        </a>
                        <div className="LoginWithGoogle">
                        </div>
                    </div>
                </form>
                <LoginWithGoogle/>

            </div>

        )
    }
}

export default Login;
