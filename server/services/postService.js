const { admin } = require('../firebase');
// const auth = admin.auth();
const db = admin.firestore();
const { v4: uuidv4 } = require('uuid');

async function createOnePost(postData) {
    //const id = uuidv4();
    const result = await db.collection('posts').doc().set(postData);
    console.log(result);
    return result
}

async function onePostById() {
    const result = await db.collection('posts').get();
    console.log(result);
    return result
}

async function getRecentPosts() {
    const recentPosts = [];
    const result = await db.collection('posts').get();
    console.log(result);
    result.forEach((doc) => {
        console.log('doc', doc.data())
        recentPosts.push(doc.data())
    })
    return recentPosts
}

exports.createOnePost = createOnePost;
exports.onePostById = onePostById;
exports.getRecentPosts = getRecentPosts;

// appele seulement db.collection()
