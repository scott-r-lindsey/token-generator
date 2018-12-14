
var supertest = require('supertest');

describe('Controller user/token/get', function() {
  it('should create a new user and token', function(done) {
    supertest(sails.hooks.http.app)
    .post('/api/v1/user/token')
    .send({ email: 'abc@123'})
    .expect(200, done);

  });

});
