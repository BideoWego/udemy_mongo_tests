require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Reading users out of the database', () => {


  let User = mongoose.model('User');
  let alex;
  let joe;
  let maria;
  let zach;


  beforeEach((done) => {
    alex = new User({ name: "Alex" });
    joe = new User({ name: "Joe" });
    maria = new User({ name: "Maria" });
    zach = new User({ name: "Zach" });

    Promise.all([
      alex,
      joe,
      maria,
      zach
    ].map((user) => user.save()))
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


  it('skips and limits the results', (done) => {
    User.find({}, { _id: 0, name: 1 })
      .sort('name').skip(1).limit(2)
      .then((users) => {
        expect(users.length).to.equal(2);
        expect(users[0].name).to.equal("Joe");
        expect(users[1].name).to.equal("Maria");
        done();
      });
  });
});



