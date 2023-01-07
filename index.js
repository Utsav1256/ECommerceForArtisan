//requiring express in the entry point file 
const express = require('express');
const app = express();
const port = 8000;

app.listen(post, function(err){
    // instead of using ',' or '+' for concatenating two string, we can embed our variable inside {} the string using (``)
    if(err) {
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is runnning on posrt : ${port}`);
});

