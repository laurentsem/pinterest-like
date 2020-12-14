const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const postRoutes = require('./routes/index');
const { cloudinary } = require('./cloudinary');
const {multerUploads} = require('./middlewares/multer');
const {Duplex} = require('stream');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(postRoutes);

app.listen(port, (err) => {
    if(err){
        console.error(err.message);
        process.exit(1)
    } else {
        console.log("Backend server runs on port " + port)
    }
});

app.get("/", (req, res) => {
    res.send({message: "Msg envoyé depuis le back!"})
});

app.post("/upload", multerUploads, (req, res) => {
    if(req.file) {
        const uploadStream = cloudinary.uploader.upload_stream({folder: "uploads"},
            function(error, result) {
            console.log(result);
            res.json(result.public_id)
        });
        const fileStream = bufferToStream(req.file.buffer);
        fileStream.pipe(uploadStream);
    }
    console.log('Req.file :' + JSON.stringify(req.file))
});

function bufferToStream(buf) {
    let tmp = new Duplex();
    tmp.push(buf);
    tmp.push(null);
    return tmp;
}
