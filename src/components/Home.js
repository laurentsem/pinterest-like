// Page Home
// Afficher les derniers posts des utilisateurs

import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('http://localhost:5000/recentPosts')
            .then(res => {
                const posts = res.data;
                this.setState({posts})
            })
    }
    render() {
        return (
        <div>
            <ul>
                {this.state.posts.map(post => <li>{post.name}</li>)}
            </ul>
        </div>
        )
    }
}

export default Home;
