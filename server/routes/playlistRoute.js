const {getPlaylist, updatePlaylist, deletePlaylist} = require('../controlleurs/playlistController')
const Router = require('express').Router;
const router = Router();

router.get('/playlist/:id', getPlaylist)
router.patch('/playlist/:id', updatePlaylist)
router.delete('/playlist/id', deletePlaylist)

module.exports = router;