const User = require('../models/user');

module.exports.profile = function(request, response) {
    return response.render('users_profile', {
        title: "User profile"
    });
}

// render the sign up page
module.exports.signUp = function(request, response) {
    return response.render('user_sign_up', {
        title: "Art | Sign Up"
    });
}

// render the sign in page
module.exports.signIn = function(request, response) {
    return response.render('user_sign_in', {
        title: "Art | Sign In"
    });
}

// get the sign up data
module.exports.create = function(request, response) {
    if(request.body.password != request.body.confirm_password) {
        return response.redirect('back');
    }

    // if password is same
    User.findOne({email: request.body.email}, function(err, user) {
        if(err) {
            console.log('error in finding user in signing up');
            return;
        }
        if(!user) {
            User.create(request.body, function(err, user) {
                if(err) {
                    console.log('error in creating creating user while signing up');
                    return;
                }
                return response.redirect('/users/sign-in');
            });
        }
        else {
            return response.redirect('back');
        }
    });
}

// sign in and create a session for the user
module.exports.createSession = function(request, response) {
    // TODO later
}