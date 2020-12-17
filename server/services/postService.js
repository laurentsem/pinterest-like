// Services
// appele seulement db.collection()

const { admin } = require('../firebase');
// const auth = admin.auth();
const db = admin.firestore();
const { v4: uuidv4 } = require('uuid');

async function createOnePost(postData) {
    const result = await db.collection('posts').doc().set(postData);
    return result
}

async function onePostById(id) {
    const result = await db.collection('posts').doc(id).get();
    return result
}

async function getRecentPosts() {
    const recentPosts = [];
    await db.collection('posts').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const currentId = doc.id
            const appObj = {...doc.data(), ['docId']: currentId}
            recentPosts.push(appObj)
        })
        })
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

// Posts with tags
async function getPostsWithTag(tag) {
    const result = await db.collection('posts').doc(tag).get();
    return result
}

exports.createOnePost = createOnePost;
exports.onePostById = onePostById;
exports.getRecentPosts = getRecentPosts;
exports.deleteOnePostById = deleteOnePostById;
exports.updateOnePostById = updateOnePostById;

exports.getPostsWithTag = getPostsWithTag;
