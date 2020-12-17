const {getPlaylist, updatePlaylist, deletePlaylist, getPlaylists} = require('../controlleurs/playlistController')
const Router = require('express').Router;
const router = Router();

router.get('/playlist', getPlaylists)
router.get('/playlist/:id', getPlaylist)
router.patch('/playlist/:id', updatePlaylist)
router.delete('/playlist/id', deletePlaylist)

module.exports = router;