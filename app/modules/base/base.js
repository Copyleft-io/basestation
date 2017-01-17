// app/modules/base.js

// load up the models
var User            = require('./models/user.js');
var Endpoint        = require('./models/endpoint.js');

// export module ===============================================================
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    // =====================================
    // ENDPOINT ============================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/endpoints', isLoggedIn, function(req, res) {
        res.render('endpoint-list.ejs', { message: req.flash('successMessage') });
    });
    app.get('/endpoints/create', isLoggedIn, function(req, res) {
        res.render('endpoint-create.ejs', { message: req.flash('errorMessage') });
    });
    app.post('/endpoints/create', isLoggedIn, function(req, res) {
        // console.log(req.body);
        // console.log('Name: ' + req.body.name);
        // console.log('Type: ' + req.body.type);
        // res.redirect('/endpoints');

        var new_endpoint_name = req.body.name;
        var new_endpoint_type = req.body.type;

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Endpoint.findOne({ 'name' :  new_endpoint_name }, function(err, endpoint) {
            // if there are any errors, return the error
            if (err)
                req.flash('errorMessage', err);

            // check to see if theres already an endpoint with that name
            if (endpoint) {
                req.flash('errorMessage', 'That Endpoint already exists!');
            } else {

                // if there is no endpoint with that name
                // create the endpoint
                var newEndpoint            = new Endpoint();

                // set the endpoints properties
                newEndpoint.name    = new_endpoint_name;
                newEndpoint.type    = new_endpoint_type;
                newEndpoint.tokens.baseToken = newEndpoint.generateToken();
                newEndpoint.tokens.remoteToken = newEndpoint.generateToken();

                // save the endpoint
                newEndpoint.save(function(err) {
                    if (err) {
                      req.flash('Error', err);
                    } else {
                      res.redirect('/endpoints');
                      req.flash('successMessage', 'Endpoint: ' + newEndpoint.name + ' Created!');
                    }
                });
            }

        });

      });
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
};
