require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Subdocs', () => {


  let User = mongoose.model('User');
  let joe;


  it('creates a subdoc', (done) => {
    joe = new User({
      name: 'Joe',
      posts: [
        { title: "The Post Title" }
      ]
    });
    joe.save()
      .then((user) => {
        expect(user.posts[0].title).to.equal("The Post Title");
        done();
      });
  });


  it('adds subdocs to record', (done) => {
    joe = new User({
      name: 'Joe',
      posts: []
    });
    joe.save()
      .then((user) => {
        user.posts.push({ title: "New Post" });
        return user.save();
      })
      .then((user) => {
        expect(user.posts[0].title).to.equal("New Post");
        done();
      });
  });


  it('adds subdocs to record', (done) => {
    joe = new User({
      name: 'Joe',
      posts: [
        { title: "New Post" }
      ]
    });
    joe.save()
      .then((user) => {
        user.posts[0].remove()
        return user.save();
      })
      .then((user) => {
        expect(user.posts.length).to.equal(0);
        done();
      });
  });  
});



