const postService = require('../services/postService');
const {Duplex} = require('stream');
const { cloudinary } = require('../cloudinary');


function bufferToStream(buf) {
    let tmp = new Duplex();
    tmp.push(buf);
    tmp.push(null);
    return tmp;
}

async function createOnePost(req, res) {
    if(req.file) {
        const uploadStream = cloudinary.uploader.upload_stream({folder: "uploads"},
            function(error, result) {
                console.log(result);
                res.json(result.public_id);
                let publicId;
                return publicId = result.public_id
            });
        const fileStream = bufferToStream(req.file.buffer);
        fileStream.pipe(uploadStream);
    }
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
