var mongoose = require('mongoose');
require('../mongoose_config');
var Schema = mongoose.Schema;


var BlogPostSchema = new Schema({
  title: String,
  content: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  userId: Number
});


var BlogPost = mongoose.model('BlogPost', BlogPostSchema);




module.exports = BlogPost;




