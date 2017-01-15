// server.js

// dependencies ================================================================
// import all the required modules and middleware we need
var express         = require('express');
var app             = express();
var port            = process.env.PORT || 9278;
var path            = require('path');

var mongoose        = require('mongoose');
var passport        = require('passport');
var flash           = require('connect-flash');
var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var session         = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require(path.join(__dirname, 'app/modules/base/config/passport'))(passport); // pass passport for configuration

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', [__dirname + '/app/modules/base/views']); // set views directory


// application level middleware ================================================
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
app.use(session({ secret: 'b45s3st4t!0n1sth35h!zz13!nmyh!zz13n!zz13' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static(path.join(__dirname, 'public'))); // serve static files (e.g. images, css, js, html)

// routes ======================================================================
require(path.join(__dirname, 'app/modules/base/base.js'))(app, passport); // base module


// launch ======================================================================
app.listen(port, function(){
    console.log('BaseStation is Running on port ' + port);
});
