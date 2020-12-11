const {v4: uuid} = require('uuid')
const { admin } = require('firebase-admin')

const auth = admin.auth();

async function verifyUserToken(token) {
    try {
        auth.verifyUserToken(token)
    } catch(err) {
        console.log(err)
    }
}

exports.verifyUserToken = verifyUserToken;