import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';
import {CloudinaryContext, Image, Transformation} from "cloudinary-react";
import {Link} from "react-router-dom";

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            post: [],
            userId: ''
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
                            <p>{e.description}</p>
                            <p> <Link to={`tag/${e.tag}`}>#{e.tag}</Link></p>


                            {this.state.userId === e.userId ?
                                <>
                                    <button onClick={() => this.DeletePost}> Supprimer</button></>
                                :
                                <>
                                </>
                            }
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default PostDetails;