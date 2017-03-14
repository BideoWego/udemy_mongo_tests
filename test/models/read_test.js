require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Reading users out of the database', () => {


  let User = mongoose.model('user');
  let joe;


  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save()
      .then(() => done());
  });


  it('finds the user', (done) => {
    User.find({ name: "Joe" })
      .then((results) => {
        var user = results[0];
        expect(user.id).to.equal(joe.id);
        done();
      });
  });


  it('find a user given a id', (done) => {
    User.findOne({ _id: joe.id })
      .then((user) => {
        expect(user.name).to.equal("Joe");
        done();
      });
  });
});



