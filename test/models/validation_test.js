var helpers = require('../test_helper');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Validation', () => {


  let User = mongoose.model('User');


  it('requires a name', (done) => {
    var user = new User({ name: undefined });
    user.validate((err) => {
      expect(err.name).to.equal("ValidationError");
      done();
    });
  });


  it('requires a name to have length of >= 2', (done) => {
    var user = new User({ name: "A" });
    user.validate((err) => {
      expect(err.name).to.equal("ValidationError");
      done();
    });
  });


  it('requires only letters', (done) => {
    var user = new User({ name: "Joe..." });
    user.validate((err) => {
      expect(err.name).to.equal("ValidationError");
      done();
    });
  });


  it('does not save invalid records', (done) => {
    var user = new User({ name: "A" });
    user.save()
      .catch((err) => {
        expect(err.name).to.equal("ValidationError");
        done();
      });
  });
});







