var mongoose = require('mongoose');


// Set bluebird as promise lib
// for mongoose
// NOTE this must be done
// in every model file???!!!
mongoose.Promise = require('bluebird');


process.on("unhandledRejection", (e) => { throw e; });





