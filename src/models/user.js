var mongoose = require('mongoose');
require('../mongoose_config');
var Schema = mongoose.Schema;


var PostSchema = require('./post_schema');


var UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"],
    validate: {
      validator: (name) => {
        return /^[a-zA-Z]+$/.test(name);
      },
      message: "Name appears to be invalid"
    }
  },
  posts: [PostSchema],
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: "BlogPost"
  }],
  likes: Number
});


UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});


UserSchema.pre('remove', function(next) {
  // this === instance
  var BlogPost = mongoose.model('BlogPost');
  BlogPost.remove({ _id: { $in: this.blogPosts } })
    .then(() => next());
});


var User = mongoose.model('User', UserSchema);


module.exports = User;






