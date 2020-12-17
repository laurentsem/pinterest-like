const { admin } = require('firebase');
const { createOnePost, onePostById, getRecentPosts, updateOnePostById, deleteOnePostById } = require('./services/postService');
const { createOneComment } = require('./services/commentsService');
const {createUser} = require('./services/userService');

async function tests() {
    //const result = await createOnePost();
    const result = await onePostById('3tOo3vzrrCDRwp5wNuty');
    //const result = await getRecentPosts();
    //const result = await updateOnePostById('Dl5tGrmqYPLGHahbKoGI', {name: 'test4', description: 'test4'});
    //const result = await deleteOnePostById('YBOSJNVG5CTERqrTHCnQ');

     //const result = await postOneComment({contenu: 'Comment 4', postId: '2', userId: '1'});
    //const result = await allCommentsByOnePost();
    //const result = await allCommentsByOneUser();
    //const result = await deleteOneCommentById('zYjJpLhCPhIc46CvhkDB');
    //const result = await getOneCommentById('Emu6VlEJ9ddFXFAD0PWT');
    //const result = await updateOneCommentById('KcNajwPaxiiJlo02st1z', {userId: "2"});

    //const result = await createUser({name: 'hugo'});

    console.log(result);
}

tests();
