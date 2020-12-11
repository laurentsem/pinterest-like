// Signup
// Page d'inscription
import "../assets/css/singin.scss"

import React, {Component} from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Un essai a été envoyé : ' + this.state.value);
        event.preventDefault();
    }

    retournLaVal() {
        return (this.state.value);
    }

    render() {
        return (
            <form>
                <div class="segment">
                    <h2>Join the club</h2>
                </div>
                <div>
                    <label>
                        <input type="text" placeholder="Pseudo" color="black" value={this.state.value}
                               onChange={this.handleChange}/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Mot de passe"/>
                        <input type="password" placeholder="Confirmer le mot de passe"/>
                        <button className="red" type="button"><i className="icon ion-md-lock"/> Log in</button>
                    </label>
                </div>
                <div className="info">
                    <span onChange={this.handleChange}>Pseudo: {this.state.value}</span>
                </div>
            </form>
        )
    }
}

export default Signup;
