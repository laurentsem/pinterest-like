import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            post: []
        };

        this.state = this.initialState;
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState(() => ({
                    userId: user.uid
                }));
            } else {
                console.log("User not logged");
            }
        })

        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(res => {
                const playlist = res.data;
                this.setState({playlist})
            })
    }

    render() {
        return (
            <div>
                <h2>  </h2>


            </div>
        );
    }
}

export default PostDetails;