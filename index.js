//requiring express in the entry point file 
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assests'));

app.use(expressLayouts);// we need todo this before requiring the routes // bcz. in the routes those views going to be rendered


//  using express router
app.use('/', require('./routes'));
//extrcting styles and scripts from the sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

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

