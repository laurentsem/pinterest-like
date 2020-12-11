const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const postRoutes = require('./routes/index');
const { recentPosts, createOnePost, deleteOnePostById, onePostById , updateOnePostById } = require('./controlleurs/postControlleur');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.get("/posts", recentPosts);

