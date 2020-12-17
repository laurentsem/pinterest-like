const {postOneComment, getOneCommentById, allCommentsByOnePost, allCommentsByOneUser, deleteOneCommentById, updateOneCommentById} = require('../controlleurs/commentsController')
const Router = require('express').Router;
const router = Router();

router.post('/postComment', postOneComment);

router.get('/comment/:id', getOneCommentById);

router.get('/commentsOfPost/:id', allCommentsByOnePost);

router.get('/commentsOfUser/:id', allCommentsByOneUser);

router.get('/delComments/:id', deleteOneCommentById);

router.post('/upComments/:id', updateOneCommentById);

module.exports = router;