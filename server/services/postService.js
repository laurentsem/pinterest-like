// Services
// appele seulement db.collection()

const { admin } = require('../firebase');
// const auth = admin.auth();
const db = admin.firestore();
const { v4: uuidv4 } = require('uuid');
const {JQuery} = require('jquery');

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
            const appObj = {...doc.data(), ['docId']: currentId};
            recentPosts.push(appObj)
        })
        });
    return recentPosts
}

async function getPostsByOneTag(tag) {
    const postsWithThisTag = [];
    await db.collection('posts').where('tag', '==', tag).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const appObj = {...doc.data(), ['tag']: tag};
            postsWithThisTag.push(appObj)
        })
    });
    return postsWithThisTag
}

async function getAllTags() {
    const tags = [];
        await db.collection('posts').select("tag").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                const appObj = {...doc.data()};
                tags.push(appObj.tag)
            })
    });
    const seen = {};
    const uniqueTags = [];
    for (let i = 0; i < tags.length; i++) {
        if (!(tags[i] in seen)) {
            uniqueTags.push(tags[i]);
            seen[tags[i]] = true;
        }
    }
    return uniqueTags
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
exports.getPostsByOneTag = getPostsByOneTag;
exports.getAllTags = getAllTags;
