require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');

describe('Deleting a user', () => {


  let User = mongoose.model('User');
  let joe;


  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save()
      .then(() => done());
  });


  it('deletes a user from instance', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        expect(user).to.equal(null);
        done();
      })
  });


  it('deletes a user from class', (done) => {
    User.remove({ _id: joe.id })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        expect(user).to.equal(null);
        done();
      })
  });


  it('deletes a user from class with findOneAndRemove', (done) => {
    User.findOneAndRemove({ _id: joe.id })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        expect(user).to.equal(null);
        done();
      })
  });


  it('deletes a user from class with findByIdAndRemove', (done) => {
    User.findByIdAndRemove(joe.id)
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        expect(user).to.equal(null);
        done();
      })
  });
});





