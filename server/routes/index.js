const Router = require('express').Router;
const router = Router();

/*
app.get('/', function (req, res) {
    res.send('Hello World')
});
*/

router.post('/createPost', createOnePost);

router.get('/post/:id', onePostById);

router.get('/recentPosts', recentPosts);
