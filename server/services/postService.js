// Services
// appele seulement db.collection()

const { admin } = require('../firebase');
// const auth = admin.auth();
const db = admin.firestore();
const { v4: uuidv4 } = require('uuid');

async function createOnePost(postData) {
    //const id = uuidv4();
    const result = await db.collection('posts').doc().set(postData);
    return result
}

async function onePostById(id) {
    const result = await db.collection('posts').doc(id).get();
    return result
}

// TODO: get avec la date la plus récente
async function getRecentPosts() {
    const recentPosts = [];
    const result = await db.collection('posts').get();
    result.forEach((doc) => {
        recentPosts.push(doc.data())
    });
    return recentPosts
}

async function deleteOnePostById(id) {
    const result = await db.collection('posts').doc(id).delete();
    return result
}

async function updateOnePostById(id, postData) {
    const result = await db.collection('posts').doc(id).set(postData, {merge: true});
    return result

}

exports.createOnePost = createOnePost;
exports.onePostById = onePostById;
exports.getRecentPosts = getRecentPosts;
exports.deleteOnePostById = deleteOnePostById;
exports.updateOnePostById = updateOnePostById;
