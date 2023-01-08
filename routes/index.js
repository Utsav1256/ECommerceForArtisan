// it is the entry point of all the routes
const express = require('express'); 
const router = express.Router(); // express.Router() is a module, which will help in separating the app routes and controller
console.log('router loaded'); //    checking if router is loaded or not

// requiring the home_controller
const homeController = require('../controllers/home_controller');
// accessing 'home_controller action' -> which is 'home' 
router.get('/', homeController.home);

router.use('/users', require('./users'));




module.exports = router;