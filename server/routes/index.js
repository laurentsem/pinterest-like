const { middlewareVerifyAuth } = require('../middlewares/index');
const { recentPosts, createOnePost, deleteOnePostById, onePostById , updateOnePostById } = require('../controlleurs/postsControlleur');
const { postOneComment, allCommentsByOnePost, allCommentsByOneUser, deleteOneCommentById, getOneCommentById, updateOneCommentById } = require('../controlleurs/commentsController');
const { addPostToPlaylist, removePostToPlaylist, getOnePlaylistById, allPlaylistsByOneUser, deleteOnePlaylistById, updateOnePlaylistById } = require('../controlleurs/playlistsController');
const Router = require('express').Router;
const router = Router();

router.use(middlewareVerifyAuth);
/*
app.get('/', function (req, res) {
    res.send('Hello World')
});
*/

router.post('/createPost', createOnePost);

router.get('/post/:id', onePostById);

router.get('/recentPosts', recentPosts);

router.get('/delPost/:id', deleteOnePostById);

router.post('/upPost/:id', updateOnePostById);

/////////////////////////////////////////////////

router.post('/postComment', postOneComment);

router.get('/comment/:id', getOneCommentById);

router.get('/commentsOfPost/:id', allCommentsByOnePost);

router.get('/commentsOfUser/:id', allCommentsByOneUser);

router.get('/delComments/:id', deleteOneCommentById);

router.post('/upComments/:id', updateOneCommentById);

/////////////////////////////////////////////////

router.post('/post/:id/addPostToPlaylist', addPostToPlaylist);

router.post('/post/:id/removePostToPlaylist', removePostToPlaylist);

router.get('/playlist/:id', getOnePlaylistById);

router.get('/playlistOfUser/:id', allPlaylistsByOneUser);

router.get('/delComments/:id', deleteOnePlaylistById);

router.post('/upComments/:id', updateOnePlaylistById);
