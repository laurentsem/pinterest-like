import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            allPosts: [],
            postId: '',
            title: '',
            userId: '',
            description: '',
            photoUrl: ''
        }
    }

}
