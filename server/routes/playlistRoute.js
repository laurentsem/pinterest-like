const {createPlaylist, getPlaylist, updatePlaylist, deletePlaylist, getPlaylists} = require('../controlleurs/playlistController')
const Router = require('express').Router;
const router = Router();

// Create playlist
router.post('/playlist', createPlaylist)

// Get all playlist
router.get('/playlist', getPlaylists)

// Get one playlist details
router.get('/playlist/:id', getPlaylist)

// Delete playlist
router.delete('/playlist/:id', deletePlaylist)

module.exports = router;