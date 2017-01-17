// app/modules/base/ednpoint.js

// dependencies ================================================================
// import all the required modules and middleware we need
var mongoose     = require('mongoose');
var randomstring = require('randomstring');

// define the schema for our endpoint model
// baseToken = auth token to basestation
// remoteToken = auth token to endpoint
var endpointSchema = mongoose.Schema({

    name             : String,
    type             : String,
    tokens           : {
        baseToken  : String,
        remoteToken     : String
    }

});

// methods ======================
// generating a random token
// default length is 32
endpointSchema.methods.generateToken = function() {
    return randomstring.generate();
};


// create the model for users and expose it to our app
module.exports = mongoose.model('Endpoint', endpointSchema);
