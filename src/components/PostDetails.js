import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            post: [],
            getId: ''
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
                const post = res.data;
                this.setState({post})
            })
    }

    DeletePost = (id) => {
        axios.delete(`http://localhost:5000/posts/${id}`)
            .then(res => {
                console.log(res)
                this.props.history.push('/home')
            })
    }



    render() {
        return (
            <div>
                <div>
                    {this.state.post.map(e =>
                        <div>
                            <h2>{e.title}</h2>
                                <CloudinaryContext cloudName="dp2k3zmzy">
                                    <Image publicId={e.imageURL} ><Transformation gravity="east" crop="fill" /></Image>
                                </CloudinaryContext>
                            <p>Description: {e.description}</p>
                            <p>Tag : {e.tag}</p>

                            <button onclick={() => this.DeletePost}> Supprimer </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default PostDetails;