var mongoose = require('mongoose');
require('../mongoose_config');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
  title: String
});


module.exports = PostSchema;






