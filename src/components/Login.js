// Login
// Page de connexion
import"../assets/css/login.css"

import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div class="login-box">
                <h2>Connectez-vous !</h2>
                <form>

                <div class="user-box">
                <input type="text" name="" required="" placeholder="Pseudo"/>
                <input type="password" name="" required="" placeholder="Mot de passe"/>
                    <a href="#">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <button type="button">Se connecter</button>
                        Se connecter
                    </a>

        </div>
                </form>

            </div>

        )
    }
}

export default Login;