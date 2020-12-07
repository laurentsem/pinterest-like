// Login
// Page de connexion

import React, { Component } from 'react';

class ProfilePage extends Component {
    render() {
        return (
        <div>
            <h2>Connectez-vous !</h2>
            <form>
                <input type="text" placeholder="Pseudo"></input>
                <input type="text" placeholder="Mot de passe"></input>
                <button type="button">Se connecter</button>
            </form>
        </div>    
        )
    }
}

export default ProfilePage;