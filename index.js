const express = require('express');
const app = express();
const port = 8000;

app.listen(posrt, function(err){
    if(err) {
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is runnning on posrt : ${port}`);
});