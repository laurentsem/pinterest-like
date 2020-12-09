// Profile page
// Affiche les informations de l'utilisateur

import React, {Component} from 'react';
import "../assets/css/profile.css"

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <h2>Profile Page</h2>
                <input type="text" placeholder="Nom"/>
            </div>
        )
    }
}

export default ProfilePage;
