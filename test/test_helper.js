var mongoose = require('mongoose');


// Only run tests once connected
before((done) => {
  mongoose.connect('mongodb://localhost/users_test')
    .then(() => done())
    .catch((e) => { throw e; });
});


// Clean DB after each test
afterEach((done) => {
  var collections = mongoose
    .connection
    .collections;

  var collectionKeys = Object.keys(collections);

  var promises = [];

  collectionKeys.forEach((key) => {
    var promise = collections[key].drop();
    promises.push(promise);
  });

  Promise.all(promises)
    .then(() => done())
    .catch((e) => { throw e; });
});



