var mongoose = require('mongoose');
require('../mongoose_config');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});


var Comment = mongoose.model('Comment', CommentSchema);




module.exports = Comment;




