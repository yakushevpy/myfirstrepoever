const assert = require('chai').assert;
const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const newFunctions = require('../functions');

chai.use(chaiHttp);

describe('Index', function(){
	describe('sayHello function', function(){
		it('should return Hello', function(){
			let result = app.sayHello();
			assert.equal(result, 'hello');
		});

		it('should return String value', function(){
			let result = app.sayHello();
			assert.typeOf(result, 'string');
		});
	});
	describe('addNumbers function', function(){
		it('should return SUMM of 5+23 (28)', function(){
			let result = app.addNumbers(5,23);
			assert.equal(result,28);
		});

		it('should return Number value', function(){
			let result = app.addNumbers(5,23);
			assert.typeOf(result, 'number')
		});
	});
});
describe('Rick and Morty API', function() {
	describe('getCharacter should return character', function(){
		it('should return 200', function(done){
		chai.request('https://rickandmortyapi.com/api/character')
  			.get('/2')
  			.end (function(err,res) {
  				expect(res).to.have.status(200);
  				done();
  			});
  		});

  		it('should return "Morty Smith"', function(done){
		chai.request('https://rickandmortyapi.com/api/character')
  			.get('/2')
  			.end (function(err,res) {
  				assert.equal(res.body.name,"Morty Smith")
  				done();
  			});
  		});

  		it('should return NOT "Morty Smith"', function(done){
		chai.request('https://rickandmortyapi.com/api/character')
  			.get('/3')
  			.end (function(err,res) {
  				assert.notEqual(res.body.name,"Morty Smith")
  				done();
  			});
  		});
	});
});

describe('Requests from fnc', function() {
	it('should return 200', async function(){
		let result = await newFunctions.getRequest('https://rickandmortyapi.com/api/character','/2');
		expect(result).to.have.status(200);
	})
});