// Page Home
// Afficher les derniers posts des utilisateurs

import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                const posts = res.data;
                console.log(posts)
                this.setState({posts})
            })
    }
    render() {
        return (
        <div>
            <ul>
                {this.state.posts.map(post => <li>{post.description}</li>)}
            </ul>
        </div>
        )
    }
}

export default Home;
