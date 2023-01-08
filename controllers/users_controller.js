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