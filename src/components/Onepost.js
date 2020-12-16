import React, { Component } from 'react';
import axios from 'axios';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';

class Onepost extends Component{


    render() {
        return(
            <div>
                {this.state.posts.map(post => <li>{post.description}</li>)}
            </div>
        )
    }
}

export default Onepost;
