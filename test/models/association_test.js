require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Associations', () => {


  let BlogPost = mongoose.model('BlogPost');
  let Comment = mongoose.model('Comment');
  let User = mongoose.model('User');
  let joe;
  let blogPost;
  let comment;


  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({
      title: "Awesome",
      content: "Cool!"
    });
    comment = new Comment({ content: "Nice!" });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = joe;

    Promise.all([
      joe,
      blogPost,
      comment
    ].map((model) => model.save()))
      .then(() => done());
  });


  it('saves a user and blog post', (done) => {
    User.findOne({ name: "Joe" })
      .populate("blogPosts")
      .then((user) => {
        expect(user.blogPosts[0].title).to.equal("Awesome");
        done();
      });
  });


  it('saves a full association tree', (done) => {
    User.findOne({ name: "Joe" })
      .populate({
        path: "blogPosts",
        model: "BlogPost",
        populate: {
          path: "comments",
          model: "Comment",
          populate: {
            path: "user",
            model: "User"
          }
        }
      })
      .then((user) => {
        var [blogPost] = user.blogPosts;
        var [comment] = blogPost.comments;
        var user = comment.user;

        expect(blogPost.title).to.equal("Awesome");
        expect(comment.content).to.equal("Nice!");
        expect(comment.user.name).to.equal("Joe");

        done();
      });
  });
});






