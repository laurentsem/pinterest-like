// Login
// Page de connexion
import "../assets/css/login.css"

import React, {Component} from 'react';
import firebase, {googleProvider} from "../server/firebase";

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push('/home');
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };

    render() {
        const { email, password, error } = this.state;
        return (
            <div>
                <div className="segment">
                    <h2>Connect You !</h2>
                </div>
                {error ? (
                    <>{error.message}</>
                ) : null}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default Login;
