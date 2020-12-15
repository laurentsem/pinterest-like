// Services user
// appele seulement db.collection()

const { admin } = require('../firebase');
// const auth = admin.auth();
const db = admin.firestore();
const { v4: uuidv4 } = require('uuid');

async function getUserById(id) {
    const result = await db.collection('users').doc(id).get();
    return result
}

async function deleteUserById(id) {
    const result = await db.collection('users').doc(id).delete();
    return result
}

async function createUser(userData) {
    const result = await db.collection('users').doc().set(userData);
    return result

}

exports.getUserById = getUserById;
exports.deleteUserById = deleteUserById;
exports.createUser = createUser;
