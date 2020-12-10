const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const env = require('dotenv');
const path = require('path');

env.config();

const serviceAccount = require(path.resolve(__dirname, process.env.FIREBASE_SERVICE_FILE));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.admin = admin;
exports.db = db;

