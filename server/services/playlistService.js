// Services de playlist
// appele seulement db.collection()

const { admin } = require('../firebase');
const db = admin.firestore();

async function getPlaylist(id) {
    const playlist = []
    const result = await db.collection('playlist').doc(id).get()
    const appObj = {...result.data(), ['playlistId']: id}
    playlist.push(appObj)
    return playlist
    }


async function getPlaylists() {
    const playlists = [];
    await db.collection('playlist').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const currentId = doc.id
            const appObj = {...doc.data(), ['playlistId']: currentId}
            playlists.push(appObj)
        })
    })
    return playlists
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
exports.getPlaylists = getPlaylists
exports.deletePlaylist = deletePlaylist;
exports.updatePlaylist = updatePlaylist;