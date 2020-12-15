const commentsService = require('../services/commentsService');

async function postOneComment(req, res) {
    const result = await commentsService.postOneComment(req.body);
    res.json(result)
}

async function getOneCommentById(req, res) {
    const result = await commentsService.getOneCommentById();
    res.json(result)
}

async function allCommentsByOnePost(req, res) {
    const result = await commentsService.allCommentsByOnePost();
    res.json(result)
}

async function allCommentsByOneUser(req, res) {
    const result = await commentsService.allCommentsByOneUser();
    res.json(result)
}

async function deleteOneCommentById(req, res) {
    const result = await commentsService.deleteOneCommentById();
    res.json(result)
}

async function updateOneCommentById(req, res) {
    const result = await commentsService.updateOneCommentById(req.body);
    res.json(result)
}

exports.postOneComment = postOneComment;
exports.getOneCommentById = getOneCommentById;
exports.allCommentsByOnePost = allCommentsByOnePost;
exports.allCommentsByOneUser = allCommentsByOneUser;
exports.deleteOneCommentById = deleteOneCommentById;
exports.updateOneCommentById = updateOneCommentById;