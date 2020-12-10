const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, (err) => {
    if(err){
        console.error(err.message);
        process.exit(1)
    }
});
