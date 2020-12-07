// New Post
// Formulaire pour poster une image

import React, { Component } from 'react';

class NewPost extends Component {
    render() {
        return (
        <div>
            <h2>Create new Post</h2>
            <form>
                <input type="text" placeholder="Nom"></input>
                <button type="submit">Submit</button>
            </form>
        </div>    
        )
    }
}

export default NewPost;