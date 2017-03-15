require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Associations', () => {


  let BlogPost = mongoose.model('BlogPost');
  let User = mongoose.model('User');
  let joe;
  let blogPost;


  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({
      title: "Awesome",
      content: "Cool!"
    });

    joe.blogPosts.push(blogPost);

    Promise.all([
      joe,
      blogPost
    ].map((model) => model.save()))
      .then(() => done());
  });


  it('removes blog posts on user deletion', (done) => {
    joe.remove()
      .then(() => BlogPost.count())
      .then((count) => {
        expect(count).to.equal(0);
        done();
      });
  });
});






