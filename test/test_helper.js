var mongoose = require('mongoose');
require('../src/load_models');


// Only run tests once connected
before((done) => {
  mongoose.connect('mongodb://localhost/users_test')
    .then(() => done());
});


// Clean DB after each test
afterEach((done) => {
  var collections = mongoose
    .connection
    .collections;

  var collectionKeys = Object.keys(collections);

  var promises = [];

  collectionKeys.forEach((key) => {
    var promise = collections[key].remove(); //<<<<<<<<<<<<<
    promises.push(promise);
  });

  Promise.all(promises)
    .then(() => done());
});










