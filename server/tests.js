const { admin } = require('firebase');
const { createOnePost, onePostById, getRecentPosts, updateOnePostById, deleteOnePostById } = require('./services/postsService');
const { postOneComment, allCommentsByOnePost, allCommentsByOneUser, deleteOneCommentById, getOneCommentById, updateOneCommentById } = require('./services/commentsService');
const { addPostToPlaylist, removePostToPlaylist, getOnePlaylistById, allPlaylistsByOneUser, deleteOnePlaylistById, updateOnePlaylistById } = require('./services/playlistsService');

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

    //const result = await addPostToPlaylist();
    //const result = await removePostToPlaylist();
    //const result = await getOnePlaylistById();
    //const result = await allPlaylistsByOneUser();
    //const result = await deleteOnePlaylistById();
    //const result = await updateOnePlaylistById();
    console.log(result);
}

tests();
