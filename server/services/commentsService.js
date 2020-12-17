// Comments
// appele seulement db.collection()

const { admin } = require('../firebase');
const db = admin.firestore();

async function postOneComment(commentData) {
    const result = await db.collection('comments').doc().set(commentData);
    return result
}

async function getOneCommentById(id) {
    const result = await db.collection('comments').doc(id).get();
    return result
}

async function allCommentsByOnePost() {
    const commentsOfPost = [];
    const result = await db.collection('comments').orderBy('postId').get();
    result.forEach((doc) => {
        commentsOfPost.push(doc.data())
    });
    return commentsOfPost
}

async function allCommentsByOneUser() {
    const commentsOfUser = [];
    const result = await db.collection('comments').orderBy('userId').get();
    result.forEach((doc) => {
        commentsOfUser.push(doc.data())
    });
    return commentsOfUser
}

async function deleteOneCommentById(id) {
    const result = await db.collection('comments').doc(id).delete();
    return result
}

async function updateOneCommentById(id, commentData) {
    const result = await db.collection('comments').doc(id).set(commentData, {merge: true});
    return result

}

exports.postOneComment = postOneComment;
exports.getOneCommentById = getOneCommentById;
exports.allCommentsByOnePost = allCommentsByOnePost;
exports.allCommentsByOneUser = allCommentsByOneUser;
exports.deleteOneCommentById = deleteOneCommentById;
exports.updateOneCommentById = updateOneCommentById;