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
        <div className="allbody">
            {this.state.posts.map(e =>
                <div className="child-page-listing">
                    <article className="location-listing">
                        <div className="location-image">
                            <CloudinaryContext cloudName="dp2k3zmzy">
                                <div className="box">
                                    <Image publicId={e.imageURL} ><Transformation gravity="east" crop="fill" /></Image>
                                    <li id="li">{e.title}</li>
                                    {this.state.getId === e.userId ?
                                        <><button onClick={() => this.DeletePost(e.docId)}>Delete post</button></>
                                        :
                                        <>
                                        </>
                                    }
                                </div>
                            </CloudinaryContext>
                            <p>Description: {e.description}</p>
                            <p>Tag : {e.tag}</p>
                        </div>
                    </article>
                </div>
            )};
        </div>
        );
    }
}

export default TagDetails;
