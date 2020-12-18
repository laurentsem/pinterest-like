import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";

class TagDetails extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            userId: '',
            posts: []
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
        });

        const tag = this.props.match.params.tag;
        console.log("Tag in URL" + tag);
        axios.get(`http://localhost:5000/tag/${tag}`)
            .then(res => {
                const posts = res.data;
                this.setState({posts})
            })
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.posts.map(e =>
                        <div>
                            <h2>{e.title}</h2>
                            <CloudinaryContext cloudName="dp2k3zmzy">
                                <Image publicId={e.imageURL} ><Transformation gravity="east" crop="fill" /></Image>
                            </CloudinaryContext>
                            <p>Description: {e.description}</p>
                            <p>Tag : {e.tag}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default TagDetails;
