const { middlewareVerifyAuth } = require('../middlewares/index')
const Router = require('express').Router;
const router = Router();

router.use(middlewareVerifyAuth);
/*
app.get('/', function (req, res) {
    res.send('Hello World')
});
*/

//router.post('/createPost', createOnePost);

//router.get('/post/:id', onePostById);

router.get('/recentPosts', recentPosts);
