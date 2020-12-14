// Playlists
// appele seulement db.collection()

const { admin } = require('../firebase');
// const auth = admin.auth();
const db = admin.firestore();
const { v4: uuidv4 } = require('uuid');

async function addPostToPlaylist(commentData) {
    //const id = uuidv4();
    const result = await db.collection('playlist').doc().set(commentData);
    return result
}

async function removePostToPlaylist(id) {
    const result = await db.collection('playlist').doc(id).get();
    return result
}

async function getOnePlaylistById(id) {
    const result = await db.collection('playlist').doc(id).get();
    return result
}

async function allPlaylistsByOneUser() {
    const commentsOfUser = [];
    const result = await db.collection('playlist').orderBy('userId').get();
    result.forEach((doc) => {
        commentsOfUser.push(doc.data())
    });
    return commentsOfUser
}

async function deleteOnePlaylistById(id) {
    const result = await db.collection('playlist').doc(id).delete();
    return result
}

async function updateOnePlaylistById(id, playlistData) {
    const result = await db.collection('playlist').doc(id).set(playlistData, {merge: true});
    return result

}

exports.addPostToPlaylist = addPostToPlaylist;
exports.removePostToPlaylist = removePostToPlaylist;
exports.getOnePlaylistById = getOnePlaylistById;
exports.allPlaylistsByOneUser = allPlaylistsByOneUser;
exports.deleteOnePlaylistById = deleteOnePlaylistById;
exports.updateOnePlaylistById = updateOnePlaylistById;
