const playlistsService = require('../services/playlistsService');

async function addPostToPlaylist(req, res) {
    const result = await playlistsService.addPostToPlaylist(req.body);
    res.json(result)
}

async function removePostToPlaylist(req, res) {
    const result = await playlistsService.removePostToPlaylist(req.body);
    res.json(result)
}

async function getOnePlaylistById(req, res) {
    const result = await playlistsService.getOnePlaylistById();
    res.json(result)
}

async function allPlaylistsByOneUser(req, res) {
    const result = await playlistsService.allPlaylistsByOneUser();
    res.json(result)
}

async function deleteOnePlaylistById(req, res) {
    const result = await playlistsService.deleteOnePlaylistById();
    res.json(result)
}

async function updateOnePlaylistById(req, res) {
    const result = await playlistsService.updateOnePlaylistById(req.body);
    res.json(result)
}

exports.addPostToPlaylist = addPostToPlaylist;
exports.removePostToPlaylist = removePostToPlaylist;
exports.getOnePlaylistById = getOnePlaylistById;
exports.allPlaylistsByOneUser = allPlaylistsByOneUser;
exports.deleteOnePlaylistById = deleteOnePlaylistById;
exports.updateOnePlaylistById = updateOnePlaylistById;
