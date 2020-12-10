const db = require('../firebase');

exports.getOnePostById = async (req, res) => {
    const post = db.collection('post').doc('');
    const doc = await post.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', doc.data());
    }
};

exports.getPosts = async (req, res) => {
    const posts = db.collection('post').get();
    const doc = await posts.get();
    doc.then(data => {
        const allPosts = [];
        data.forEach(doc => allPosts.push({
            postId: doc.id,
            title: doc.data().title,
            userId: doc.data().userId,
            description: doc.data().description,
            photoURL: doc.data().photoURL
        }));
        return res.json(allPosts)
    }).catch(err => console.log(err))
};

exports.deleteOnePost = async (req, res) => {
    const post = db.collection('post');
    const doc = await post.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', doc.data());
    }
};
