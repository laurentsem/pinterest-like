

async function createOnePost(req, res) {
    const post = db.collection('posts').post();
    const doc = await post.post();
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
}

async function onePostById(req, res) {

}

async function recentPosts(req, res) {

}
