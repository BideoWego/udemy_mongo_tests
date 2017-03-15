require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Creating records', () => {


  let User = mongoose.model('User');


  it('saves a user', (done) => {
    var joe = new User({ name: "Joe" });
    joe.save()
      .then((user) => {
        expect(user.isNew).to.equal(false);
        expect(user.name).to.equal("Joe");
        done();
      });
  });
});






