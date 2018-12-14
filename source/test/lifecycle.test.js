
var sails = require('sails');

before(function(done) {

  this.timeout(5000);

  sails.lift({
    // wipe the db before tests
    models: { migrate: 'drop' },
    hooks: { grunt: false },
    log: { level: 'warn' },

  }, function(err) {
    if (err) { return done(err); }


    return done();
  });
});

after(function(done) {

  sails.lower(done);

});
