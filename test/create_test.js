var expect = require('chai').expect;
var User = require('../src/User');


describe('Creating records', () => {
  it('saves a user', (done) => {
    var joe = new User({ name: "Joe" });
    joe.save()
      .then((user) => {
        expect(user.isNew).to.equal(false);
        expect(user.name).to.equal("Joe");
        done();
      })
      .catch((e) => { throw e });
  });
});






