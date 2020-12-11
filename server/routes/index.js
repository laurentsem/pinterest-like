const { middlewareVerifyAuth } = require('../middlewares/index');
const { recentPosts, createOnePost, deleteOnePostById, onePostById , updateOnePostById } = require('../controlleurs/postControlleur');
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
