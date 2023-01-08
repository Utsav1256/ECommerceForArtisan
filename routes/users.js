const express = require('express'); 
const router = express.Router(); // express.Router() is a module, which will help in separating the app routes and controller
console.log('users router loaded');

// requiring the users_controller
const usersController = require('../controllers/users_controller');
// accessing 'users_controller action' -> that is 'profile' 
router.get('/profile', usersController.profile);
// accessing 'users_controller action' -> that is 'signUp'
router.get('/sign-up', usersController.signUp);
// accessing 'users_controller action' -> that is 'signIn'
router.get('/sign-in', usersController.signIn);

module.exports = router;