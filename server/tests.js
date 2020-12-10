const { admin } = require('firebase');
const { createOnePost, onePostById, recentPosts } = require('./services/postService');

async function tests() {
    const result = await createOnePost({name: 'test', description: 'desc test'});
    console.log(result);
}

tests();
