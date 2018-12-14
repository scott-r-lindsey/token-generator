
//var util = require('util');

describe('Random (helper)', function() {

  describe(' called with charcount 5', function() {
    it('should return 5 random bytes matching /^[a-z0-9]+$/', function (done) {

      var random = sails.helpers.random(5);

      if (5 !== random.length) {
        return done(new Error(
          'should return a string 5 bytes long '+
          'but instead a string that is '+ random.length +
          ' bytes long was returned.'
        ));
      }
      if (!random.match(/^[a-z0-9]+$/)) {
        return done(new Error(
          'should return a that matches "/^[a-z0-9]+$/" '+
          'but instead the string '+ random +
          ' was returned.'
        ));
      }

      return done();

    });

  });

  describe(' called with charcount 2 and chars "@#$%"', function() {

    it('should return 2 random bytes matching /^[@#$%]+$/', function (done) {

      var random = sails.helpers.random(2, '@#$%');

      if (2 !== random.length) {
        return done(new Error(
          'should return a string 2 bytes long '+
          'but instead a string that is '+ random.length +
          ' bytes long was returned.'
        ));
      }
      if (!random.match(/^[@#$%]+$/)) {
        return done(new Error(
          'should return a that matches "/^[@#$%]+$/" '+
          'but instead the string '+ random +
          ' was returned.'
        ));
      }

      return done();

    });

  });

});
