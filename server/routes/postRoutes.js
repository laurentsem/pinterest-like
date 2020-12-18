//const { middlewareVerifyAuth } = require('../middlewares/index');
const { recentPosts, createOnePost, deleteOnePostById, onePostById , updateOnePostById, getPostsByOneTag, getAllTags } = require('../controlleurs/postControlleur');
const Router = require('express').Router;
const router = Router();
const {multerUploads} = require('../middlewares/multer');

//router.use(middlewareVerifyAuth);
/*
app.get('/', function (req, res) {
    res.send('Hello World')
});
*/

// Create a new Post
router.post('/posts', multerUploads, createOnePost);

// Get all posts
router.get('/posts', recentPosts);

// Get One Post By Id
router.get('/posts/:id', onePostById);

// Delete One Post with ID
router.delete('/posts/:id', deleteOnePostById);

//Update One Post with ID
router.post('/posts/:id', updateOnePostById);

//Get All Post with Tag
router.get('/tag/:tag', getPostsByOneTag);

//Get All Tags
router.get('/tags', getAllTags);

module.exports = router;
