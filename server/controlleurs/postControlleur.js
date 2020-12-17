const postService = require('../services/postService');
const {Duplex} = require('stream');
const { cloudinary } = require('../cloudinary');
const admin = require('firebase-admin');

function bufferToStream(buf) {
    let tmp = new Duplex();
    tmp.push(buf);
    tmp.push(null);
    return tmp;
}

async function createOnePost(req, res) {
    if(req.file) {
        console.log('In file...');
        const uploadStream = cloudinary.uploader.upload_stream({folder: "uploads"},
            async function (error, result) {
                req.body.imageURL = result.public_id;
                req.body.date = admin.firestore.Timestamp.fromDate(new Date());
                const createPost = await postService.createOnePost(req.body);
                res.json(createPost);
            });
        const fileStream = bufferToStream(req.file.buffer);
        fileStream.pipe(uploadStream);
    }
    else {
    await cloudinary.uploader.upload(req.body.imageURL, {folder: "uploads"},
        async function(err, result) {
            console.log("Link req.body before: " + req.body.imageURL);
            console.log("Link from Cloud: " + result.public_id);
            req.body.imageURL = result.public_id;
            req.body.date = admin.firestore.Timestamp.fromDate(new Date());
            console.log("Link after req.body change: " + req.body.imageURL);
            const createPost = await postService.createOnePost(req.body);
            res.json(createPost)
    });
        //const result = await postService.createOnePost(req.body);
    //res.json(result)
}}

async function onePostById(req, res) {
    const result = await postService.onePostById(req.params.id);
    res.json(result)
}

async function recentPosts(req, res) {
    const result = await postService.getRecentPosts();
    res.json(result)
}

async function deleteOnePostById(req, res) {
    const result = await postService.deleteOnePostById(req.params.id);
    res.json(result)
}

async function updateOnePostById(req, res) {
    const result = await postService.updateOnePostById(req.body);
    res.json(result)
}


// Posts with tags

async function postsByTag(req, res) {
    const result = await postService.getPostsWithTag(req.params.tag)
    res.json(result)
}

exports.createOnePost = createOnePost;
exports.onePostById = onePostById;
exports.recentPosts = recentPosts;
exports.deleteOnePostById = deleteOnePostById;
exports.updateOnePostById = updateOnePostById;

exports.postsByTag = postsByTag;
