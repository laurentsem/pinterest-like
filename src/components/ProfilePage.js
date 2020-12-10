// Profile page
// Affiche les informations de l'utilisateur

import React, {Component} from 'react';
import "../assets/css/profile.css"

class ProfilePage extends Component {
    render() {
        return (
            <html id="profile">
            <div>
                <h2>Profile Page</h2>
                <input type="text" placeholder="Nom"/>
            </div>
            </html>
        )
    }
}

export default ProfilePage;
