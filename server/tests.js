const { admin } = require('firebase');
const { createOnePost, onePostById, getRecentPosts } = require('./services/postService');

async function tests() {
    const result = await getRecentPosts();
    console.log(result);
}

tests();
