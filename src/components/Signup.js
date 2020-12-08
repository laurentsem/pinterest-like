// Signup
// Page d'inscription
import "../assets/css/singin.scss"

import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <form>
            <div class="segment">
            <h2>Join the club</h2>
            </div>
        <div>
            <label>
                <input type="text" placeholder="Pseudo"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Mot de passe"/>
                <input type="password" placeholder="Confirmer le mot de passe"/>
                <button className="red" type="button"><i className="icon ion-md-lock"/> Log in</button>
            </label>
        </div>
            </form>
        )
    }
}

export default Signup;
