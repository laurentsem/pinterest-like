const admin = require('firebase-admin');
const env = require('dotenv');
const path = require('path');
env.config();

const serviceAccount = require(path.resolve(__dirname, process.env.FIREBASE_ADMIN_SERVICE_FILE));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

exports.admin = admin;
exports.db = db;

