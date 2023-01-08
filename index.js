//requiring express in the entry point file 
const express = require('express');
const app = express();
const port = 8000;


//  using express router
app.use('/', require('./routes'));

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err) {
    // instead of using ',' or '+' for concatenating two string, we can embed our variable inside {} the string using (``)
    if(err) {
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is runnning on port : ${port}`);
});

