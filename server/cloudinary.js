const env = require('dotenv');
const cloudinary = require('cloudinary').v2;

env.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
    api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET
});

exports.cloudinary = cloudinary;
