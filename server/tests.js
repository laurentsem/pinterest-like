const { admin } = require('firebase');
const { createOnePost, onePostById, getRecentPosts, updateOnePostById, deleteOnePostById } = require('./services/postsService');
const { postOneComment, allCommentsByOnePost, allCommentsByOneUser, deleteOneCommentById, getOneCommentById, updateOneCommentById } = require('./services/commentsService');

async function tests() {
    //const result = await createOnePost();
    //const result = await onePostById('3tOo3vzrrCDRwp5wNuty');
    //const result = await getRecentPosts();
    //const result = await updateOnePostById('Dl5tGrmqYPLGHahbKoGI', {name: 'test4', description: 'test4'});
    //const result = await deleteOnePostById('YBOSJNVG5CTERqrTHCnQ');

    //const result = await postOneComment({contenu: 'Comment 4', postId: '2', userId: '1'});
    //const result = await allCommentsByOnePost();
    //const result = await allCommentsByOneUser();
    //const result = await deleteOneCommentById('zYjJpLhCPhIc46CvhkDB');
    //const result = await getOneCommentById('Emu6VlEJ9ddFXFAD0PWT');
    //const result = await updateOneCommentById('KcNajwPaxiiJlo02st1z', {userId: "2"});
    console.log(result);
}

tests();
