const playlistService = require('../services/playlistService');

async function createPlaylist(req, res) {
    const result = await playlistService.createPlaylist(req.body)
    res.json(result)
}
async function getPlaylist(req, res) {
    const result = await playlistService.getPlaylist(req.params.id);
    res.json(result)
}

async function getPlaylists(req, res) {
    const result = await playlistService.getPlaylists();
    res.json(result)
}

async function deletePlaylist(req, res) {
    const result = await playlistService.deletePlaylist(req.params.id);
    res.json(result)
}

async function updatePlaylist(req, res) {
    const result = await playlistService.updatePlaylist(req.params.id);
    res.json(result)
}

exports.createPlaylist = createPlaylist;
exports.getPlaylist = getPlaylist;
exports.getPlaylists = getPlaylists;
exports.deletePlaylist = deletePlaylist;
exports.updatePlaylist = updatePlaylist;