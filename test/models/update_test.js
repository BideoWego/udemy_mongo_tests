require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Updating users', () => {


  let User = mongoose.model('user');
  let joe;


  beforeEach((done) => {
    joe = new User({ name: "Joe", postCount: 0 });
    joe.save()
      .then(() => done());
  });


  it('updates an instance', (done) => {
    joe.set("name", "Alex");
    joe.save()
      .then((user) => {
        expect(user.id).to.equal(joe.id);
        expect(user.name).to.equal("Alex");
        done();
      });
  });


  it('updates an instance with update', (done) => {
    joe.update({ name: "Alex" })
      .then(() => User.find({}))
      .then((users) => {
        var user = users[0];
        expect(user.id).to.equal(joe.id);
        expect(user.name).to.equal("Alex");
        done();
      });
  });


  it('updates using class update', (done) => {
    User.update({ name: "Joe" }, { name: "Alex" })
      .then(() => User.find({}))
      .then((users) => {
        var user = users[0];
        expect(user.id).to.equal(joe.id);
        expect(user.name).to.equal("Alex");
        done();
      });
  });


  it('updates using class findOneAndUpdate', (done) => {
    User.findOneAndUpdate({ name: "Joe" }, { name: "Alex" })
      .then(() => User.find({}))
      .then((users) => {
        var user = users[0];
        expect(user.id).to.equal(joe.id);
        expect(user.name).to.equal("Alex");
        done();
      });
  });


  it('updates using class update', (done) => {
    User.findByIdAndUpdate(joe.id, { name: "Alex" })
      .then(() => User.find({}))
      .then((users) => {
        var user = users[0];
        expect(user.id).to.equal(joe.id);
        expect(user.name).to.equal("Alex");
        done();
      });
  });


  it('can increment postCount', (done) => {
    User.update({ name: "Joe" }, { $inc: { postCount: 1 } })
      .then(() => User.find({}))
      .then((users) => {
        var user = users[0];
        expect(user.id).to.equal(joe.id)
        expect(user.postCount).to.equal(1);
        done();
      });
  });
});










