const postService = require('../services/postsService');

async function createOnePost(req, res) {
    const result = await postService.createOnePost(req.body);
    res.json(result)
}

async function onePostById(req, res) {
    const result = await postService.onePostById();
    res.json(result)
}

async function recentPosts(req, res) {
    const result = await postService.getRecentPosts();
    res.json(result)
}

async function deleteOnePostById(req, res) {
    const result = await postService.deleteOnePostById();
    res.json(result)
}

async function updateOnePostById(req, res) {
    const result = await postService.updateOnePostById(req.body);
    res.json(result)
}

exports.createOnePost = createOnePost;
exports.onePostById = onePostById;
exports.recentPosts = recentPosts;
exports.deleteOnePostById = deleteOnePostById;
exports.updateOnePostById = updateOnePostById;
