var mongoose = require('mongoose');
require('../mongoose_config');
var Schema = mongoose.Schema;


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
  postCount: Number
});


var User = mongoose.model('user', UserSchema);


module.exports = User;






