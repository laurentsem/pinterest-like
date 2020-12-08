// Signup
// Page d'inscription

import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
        <div>
            <h2>Join the club</h2>
            <form>
                <input type="text" placeholder="Pseudo"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Mot de passe"></input>
                <input type="password" placeholder="Confirmer le mot de passe"></input>
                <button type="button">Se connecter</button>
            </form>
        </div>    
        )
    }
}

export default Signup;