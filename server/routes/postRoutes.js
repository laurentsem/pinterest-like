//const { middlewareVerifyAuth } = require('../middlewares/index');
const { recentPosts, createOnePost, deleteOnePostById, onePostById , updateOnePostById } = require('../controlleurs/postControlleur');
const Router = require('express').Router;
const router = Router();

//router.use(middlewareVerifyAuth);
/*
app.get('/', function (req, res) {
    res.send('Hello World')
});
*/

// Create a new Post
router.post('/posts', createOnePost);

// Get all posts
router.get('/posts', recentPosts);

// Get One Post By Id
router.get('/post/:id', onePostById);

// Delete One Post with ID
router.delete('/delPost/:id', deleteOnePostById);

//Update One Post with ID
router.post('/upPost/:id', updateOnePostById);

module.exports = router
