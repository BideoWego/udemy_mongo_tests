var helpers = require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');




describe('Virtual types', () => {


  let User = mongoose.model('User');
  let joe;


  it('postCount returns number of posts', (done) => {
    joe = new User({
      name: "Joe",
      posts: [
        { title: "Post Title" }
      ]
    });
    joe.save()
      .then((user) => {
        expect(user.postCount).to.equal(1);
        done();
      });
  });
});



