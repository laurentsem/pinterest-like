// Services de playlist
// appele seulement db.collection()

const { admin } = require('../firebase');
const db = admin.firestore();

async function getPlaylist(id) {
    const result = await db.collection('playlist').doc(id).get();
    return result
}

async function deletePlaylist(id) {
    const result = await db.collection('playlist').doc(id).delete();
    return result
}

// TODO : finir fct updatePlaylist
async function updatePlaylist(id) {
    const result = await db.collection('playlist').doc(id).set();
    return result

}


exports.getPlaylist = getPlaylist;
exports.deletePlaylist = deletePlaylist;
exports.updatePlaylist = updatePlaylist;