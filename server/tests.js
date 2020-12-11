const { admin } = require('firebase');
const { createOnePost, onePostById, getRecentPosts, updateOnePostById, deleteOnePostById } = require('./services/postService');

async function tests() {
    //const result = await createOnePost();
    //const result = await onePostById('3tOo3vzrrCDRwp5wNuty');
    const result = await getRecentPosts();
    //const result = await updateOnePostById('Dl5tGrmqYPLGHahbKoGI', {name: 'test4', description: 'test4'});
    //const result = await deleteOnePostById('YBOSJNVG5CTERqrTHCnQ');
    console.log(result);
}

tests();
