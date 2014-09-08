var chai = require('chai');
var assert = chai.assert;

var request = require('supertest');

request = request('http://localhost:3000');

describe('GET /', function(){
  it('should respond with expected json', function(done){
    request.get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({"foo": "bar"})
      .expect(200, done);
  });
});