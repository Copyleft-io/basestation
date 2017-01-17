// app/modules/base/user.js

// dependencies ================================================================
// import all the required modules and middleware we need
var mongoose      = require('mongoose');
var bcrypt        = require('bcrypt-nodejs');
var randomstring  = require('randomstring');

// define the schema for our user model
var userSchema = mongoose.Schema({

    name             : String,
    local            : {
        email        : String,
        password     : String
    },
    tokens           : {
        baseToken    : String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// generating a random token
// default length is 32
userSchema.methods.generateToken = function() {
    return randomstring.generate();
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
