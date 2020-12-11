import firebase from 'firebase/app'
const db = firebase.firestore();

export async function getData() {
    const post = db.collection('posts');
    const snapshot = await post.get();
    snapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data)
    })
}